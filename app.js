// 拼豆颜色库（标准色）
const PERLER_COLORS = [
    { name: '白色', r: 255, g: 255, b: 255 },
    { name: '黑色', r: 0, g: 0, b: 0 },
    { name: '灰色', r: 128, g: 128, b: 128 },
    { name: '深灰', r: 64, g: 64, b: 64 },
    { name: '红色', r: 255, g: 0, b: 0 },
    { name: '深红', r: 139, g: 0, b: 0 },
    { name: '粉色', r: 255, g: 192, b: 203 },
    { name: '橙色', r: 255, g: 165, b: 0 },
    { name: '黄色', r: 255, g: 255, b: 0 },
    { name: '米色', r: 245, g: 245, b: 220 },
    { name: '棕色', r: 139, g: 69, b: 19 },
    { name: '深棕', r: 101, g: 67, b: 33 },
    { name: '绿色', r: 0, g: 255, b: 0 },
    { name: '深绿', r: 0, g: 100, b: 0 },
    { name: '浅绿', r: 144, g: 238, b: 144 },
    { name: '青色', r: 0, g: 255, b: 255 },
    { name: '蓝色', r: 0, g: 0, b: 255 },
    { name: '深蓝', r: 0, g: 0, b: 139 },
    { name: '天蓝', r: 135, g: 206, b: 235 },
    { name: '紫色', r: 128, g: 0, b: 128 },
    { name: '淡紫', r: 221, g: 160, b: 221 },
    { name: '薰衣草', r: 230, g: 230, b: 250 },
    { name: '金色', r: 255, g: 215, b: 0 },
    { name: '银色', r: 192, g: 192, b: 192 },
    { name: '肤色', r: 255, g: 218, b: 185 },
    { name: '深肤色', r: 210, g: 180, b: 140 },
    { name: '橄榄绿', r: 128, g: 128, b: 0 },
    { name: '薄荷绿', r: 189, g: 252, b: 201 },
    { name: '珊瑚粉', r: 255, g: 127, b: 80 },
    { name: '桃色', r: 255, g: 229, b: 180 },
    { name: '柠檬黄', r: 255, g: 247, b: 0 },
    { name: '海军蓝', r: 0, g: 0, b: 128 },
    { name: '酒红', r: 128, g: 0, b: 32 },
    { name: '青绿', r: 0, g: 128, b: 128 },
    { name: '靛蓝', r: 75, g: 0, b: 130 },
    { name: '栗色', r: 128, g: 0, b: 0 }
];

class PerlerConverter {
    constructor() {
        this.originalImage = null;
        this.pixelData = null;
        this.patternData = null;
        this.usedColors = [];
    }

    loadImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    this.originalImage = img;
                    resolve(img);
                };
                img.onerror = reject;
                img.src = e.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    // 计算颜色距离
    colorDistance(c1, c2) {
        return Math.sqrt(
            Math.pow(c1.r - c2.r, 2) +
            Math.pow(c1.g - c2.g, 2) +
            Math.pow(c1.b - c2.b, 2)
        );
    }

    // 找到最接近的拼豆颜色
    findClosestColor(r, g, b, colorPalette) {
        let minDistance = Infinity;
        let closestColor = colorPalette[0];

        for (const color of colorPalette) {
            const distance = this.colorDistance({ r, g, b }, color);
            if (distance < minDistance) {
                minDistance = distance;
                closestColor = color;
            }
        }

        return closestColor;
    }

    // 量化颜色到指定数量
    quantizeColors(colorCount) {
        return PERLER_COLORS.slice(0, colorCount);
    }

    // 像素化处理
    pixelate(ctx, width, height, beadSize) {
        const cols = Math.floor(width / beadSize);
        const rows = Math.floor(height / beadSize);
        
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        
        const pixels = [];
        
        for (let row = 0; row < rows; row++) {
            pixels[row] = [];
            for (let col = 0; col < cols; col++) {
                const x = col * beadSize;
                const y = row * beadSize;
                
                let totalR = 0, totalG = 0, totalB = 0, count = 0;
                
                // 计算这个区域的平均颜色
                for (let dy = 0; dy < beadSize && y + dy < height; dy++) {
                    for (let dx = 0; dx < beadSize && x + dx < width; dx++) {
                        const idx = ((y + dy) * width + (x + dx)) * 4;
                        totalR += data[idx];
                        totalG += data[idx + 1];
                        totalB += data[idx + 2];
                        count++;
                    }
                }
                
                const avgR = Math.round(totalR / count);
                const avgG = Math.round(totalG / count);
                const avgB = Math.round(totalB / count);
                
                pixels[row][col] = { r: avgR, g: avgG, b: avgB };
            }
        }
        
        return { pixels, cols, rows };
    }

    // 转换为拼豆图案
    convertToPattern(pixels, cols, rows, colorPalette) {
        const pattern = [];
        const colorCount = {};
        
        for (let row = 0; row < rows; row++) {
            pattern[row] = [];
            for (let col = 0; col < cols; col++) {
                const pixel = pixels[row][col];
                const closestColor = this.findClosestColor(pixel.r, pixel.g, pixel.b, colorPalette);
                
                pattern[row][col] = closestColor;
                
                // 统计颜色使用次数
                const colorKey = `${closestColor.r},${closestColor.g},${closestColor.b}`;
                if (!colorCount[colorKey]) {
                    colorCount[colorKey] = {
                        ...closestColor,
                        count: 0
                    };
                }
                colorCount[colorKey].count++;
            }
        }
        
        // 转换为数组并排序
        this.usedColors = Object.values(colorCount).sort((a, b) => b.count - a.count);
        
        return pattern;
    }

    // 绘制原始图片
    drawOriginal(canvas, maxWidth) {
        const ctx = canvas.getContext('2d');
        const scale = maxWidth / this.originalImage.width;
        const width = this.originalImage.width * scale;
        const height = this.originalImage.height * scale;
        
        canvas.width = width;
        canvas.height = height;
        
        ctx.drawImage(this.originalImage, 0, 0, width, height);
        
        return { width, height };
    }

    // 绘制拼豆图案
    drawPattern(canvas, pattern, cols, rows, style) {
        const ctx = canvas.getContext('2d');
        const cellSize = 15;
        const gap = 1;
        
        const width = cols * (cellSize + gap);
        const height = rows * (cellSize + gap);
        
        canvas.width = width;
        canvas.height = height;
        
        // 背景
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        
        // 绘制每个豆子
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const color = pattern[row][col];
                const x = col * (cellSize + gap);
                const y = row * (cellSize + gap);
                
                if (style === 'grid' || style === 'both') {
                    // 网格样式 - 正方形
                    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
                    ctx.fillRect(x, y, cellSize, cellSize);
                    
                    // 边框
                    ctx.strokeStyle = '#ddd';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, cellSize, cellSize);
                } else if (style === 'dots') {
                    // 圆点样式 - 圆形
                    ctx.beginPath();
                    ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
                    ctx.fill();
                }
            }
        }
    }

    // 渲染颜色清单
    renderColorPalette(container) {
        container.innerHTML = '';
        
        for (const color of this.usedColors) {
            const item = document.createElement('div');
            item.className = 'color-item';
            
            item.innerHTML = `
                <div class="color-swatch" style="background-color: rgb(${color.r}, ${color.g}, ${color.b})"></div>
                <div class="color-info">
                    <div class="color-name">${color.name}</div>
                    <div class="color-count">${color.count} 颗</div>
                </div>
            `;
            
            container.appendChild(item);
        }
    }

    // 更新统计信息
    updateStats(cols, rows) {
        document.getElementById('statWidth').textContent = cols;
        document.getElementById('statHeight').textContent = rows;
        document.getElementById('statBeads').textContent = cols * rows;
        document.getElementById('statColors').textContent = this.usedColors.length;
    }

    // 下载图纸
    downloadPattern() {
        const canvas = document.getElementById('patternCanvas');
        const link = document.createElement('a');
        link.download = 'perler-pattern.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
}

// 主程序
document.addEventListener('DOMContentLoaded', () => {
    const converter = new PerlerConverter();
    
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const convertBtn = document.getElementById('convertBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const loading = document.getElementById('loading');
    const resultSection = document.getElementById('resultSection');
    const colorGrid = document.getElementById('colorGrid');
    
    let selectedFile = null;

    // 上传区域点击
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    // 文件选择
    fileInput.addEventListener('change', async (e) => {
        if (e.target.files.length > 0) {
            await handleFile(e.target.files[0]);
        }
    });

    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', async (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        if (e.dataTransfer.files.length > 0) {
            await handleFile(e.dataTransfer.files[0]);
        }
    });

    async function handleFile(file) {
        if (!file.type.startsWith('image/')) {
            alert('请选择图片文件！');
            return;
        }

        selectedFile = file;
        convertBtn.disabled = false;
        
        // 预览原始图片
        const img = await converter.loadImage(file);
        const originalCanvas = document.getElementById('originalCanvas');
        converter.drawOriginal(originalCanvas, 400);
        
        uploadArea.querySelector('p:nth-child(2)').textContent = `已选择：${file.name}`;
    }

    // 转换按钮
    convertBtn.addEventListener('click', async () => {
        if (!selectedFile) return;

        loading.classList.add('show');
        resultSection.classList.remove('show');

        // 使用 setTimeout 让 UI 有机会更新
        setTimeout(async () => {
            try {
                const beadSize = parseFloat(document.getElementById('beadSize').value);
                const maxWidth = parseInt(document.getElementById('maxWidth').value);
                const colorCount = parseInt(document.getElementById('colorCount').value);
                const outputStyle = document.getElementById('outputStyle').value;

                // 获取图片尺寸
                const originalCanvas = document.getElementById('originalCanvas');
                const width = originalCanvas.width;
                const height = originalCanvas.height;

                // 像素化处理
                const ctx = originalCanvas.getContext('2d');
                const { pixels, cols, rows } = converter.pixelate(ctx, width, height, beadSize * 4);

                // 颜色量化
                const colorPalette = converter.quantizeColors(colorCount);

                // 转换为图案
                const pattern = converter.convertToPattern(pixels, cols, rows, colorPalette);

                // 绘制图案
                const patternCanvas = document.getElementById('patternCanvas');
                converter.drawPattern(patternCanvas, pattern, cols, rows, outputStyle);

                // 渲染颜色清单
                converter.renderColorPalette(colorGrid);

                // 更新统计
                converter.updateStats(cols, rows);

                // 显示结果
                resultSection.classList.add('show');
            } catch (error) {
                console.error('转换失败:', error);
                alert('转换失败，请重试！');
            } finally {
                loading.classList.remove('show');
            }
        }, 100);
    });

    // 下载按钮
    downloadBtn.addEventListener('click', () => {
        converter.downloadPattern();
    });
});
