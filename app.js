// 拼豆颜色库（221 色完整版）
const PERLER_COLORS = [
    { name: '白色', r: 255, g: 255, b: 255 },
    { name: '黑色', r: 0, g: 0, b: 0 },
    { name: '灰色', r: 128, g: 128, b: 128 },
    { name: '深灰', r: 64, g: 64, b: 64 },
    { name: '浅灰', r: 192, g: 192, b: 192 },
    { name: '银色', r: 192, g: 192, b: 192 },
    { name: '红色', r: 255, g: 0, b: 0 },
    { name: '深红', r: 139, g: 0, b: 0 },
    { name: '鲜红', r: 255, g: 36, b: 0 },
    { name: '酒红', r: 128, g: 0, b: 32 },
    { name: '樱桃红', r: 144, g: 0, b: 64 },
    { name: '粉色', r: 255, g: 192, b: 203 },
    { name: '深粉', r: 255, g: 105, b: 180 },
    { name: '浅粉', r: 255, g: 182, b: 193 },
    { name: '桃粉', r: 255, g: 153, b: 153 },
    { name: '玫瑰粉', r: 255, g: 0, b: 127 },
    { name: '橙色', r: 255, g: 165, b: 0 },
    { name: '深橙', r: 255, g: 140, b: 0 },
    { name: '浅橙', r: 255, g: 179, b: 71 },
    { name: '珊瑚橙', r: 255, g: 127, b: 80 },
    { name: '南瓜橙', r: 255, g: 117, b: 24 },
    { name: '黄色', r: 255, g: 255, b: 0 },
    { name: '深黄', r: 255, g: 215, b: 0 },
    { name: '浅黄', r: 255, g: 255, b: 102 },
    { name: '柠檬黄', r: 255, g: 247, b: 0 },
    { name: '金黄', r: 255, g: 223, b: 0 },
    { name: '米色', r: 245, g: 245, b: 220 },
    { name: '奶油色', r: 255, g: 253, b: 208 },
    { name: '象牙白', r: 255, g: 255, b: 240 },
    { name: '肤色', r: 255, g: 218, b: 185 },
    { name: '深肤色', r: 210, g: 180, b: 140 },
    { name: '浅肤色', r: 255, g: 224, b: 189 },
    { name: '棕褐色', r: 210, g: 180, b: 140 },
    { name: '棕色', r: 139, g: 69, b: 19 },
    { name: '深棕', r: 101, g: 67, b: 33 },
    { name: '浅棕', r: 181, g: 137, b: 93 },
    { name: '咖啡棕', r: 111, g: 78, b: 55 },
    { name: '巧克力棕', r: 94, g: 53, b: 57 },
    { name: '栗子棕', r: 149, g: 69, b: 53 },
    { name: '赭石色', r: 168, g: 95, b: 53 },
    { name: '绿色', r: 0, g: 255, b: 0 },
    { name: '深绿', r: 0, g: 100, b: 0 },
    { name: '浅绿', r: 144, g: 238, b: 144 },
    { name: '草绿', r: 0, g: 128, b: 0 },
    { name: '橄榄绿', r: 128, g: 128, b: 0 },
    { name: '森林绿', r: 34, g: 139, b: 34 },
    { name: '薄荷绿', r: 189, g: 252, b: 201 },
    { name: '青绿', r: 0, g: 128, b: 128 },
    { name: '翡翠绿', r: 0, g: 201, b: 87 },
    { name: '苹果绿', r: 142, g: 220, b: 51 },
    { name: '石灰绿', r: 50, g: 205, b: 50 },
    { name: '春绿', r: 0, g: 255, b: 127 },
    { name: '海藻绿', r: 46, g: 139, b: 87 },
    { name: '鼠尾草绿', r: 135, g: 169, b: 107 },
    { name: '青色', r: 0, g: 255, b: 255 },
    { name: '深青', r: 0, g: 139, b: 139 },
    { name: '浅青', r: 224, g: 255, b: 255 },
    { name: '绿松石', r: 64, g: 224, b: 208 },
    { name: '水绿色', r: 127, g: 255, b: 212 },
    { name: '蓝色', r: 0, g: 0, b: 255 },
    { name: '深蓝', r: 0, g: 0, b: 139 },
    { name: '浅蓝', r: 173, g: 216, b: 230 },
    { name: '天蓝', r: 135, g: 206, b: 235 },
    { name: '海军蓝', r: 0, g: 0, b: 128 },
    { name: '宝蓝', r: 0, g: 105, b: 148 },
    { name: '皇家蓝', r: 65, g: 105, b: 225 },
    { name: '钴蓝', r: 0, g: 71, b: 171 },
    { name: '靛蓝', r: 75, g: 0, b: 130 },
    { name: '紫罗兰', r: 148, g: 0, b: 211 },
    { name: '紫色', r: 128, g: 0, b: 128 },
    { name: '深紫', r: 75, g: 0, b: 130 },
    { name: '浅紫', r: 216, g: 191, b: 216 },
    { name: '淡紫', r: 221, g: 160, b: 221 },
    { name: '薰衣草', r: 230, g: 230, b: 250 },
    { name: '梅红', r: 221, g: 84, b: 0 },
    { name: '紫红', r: 192, g: 0, b: 192 },
    { name: '洋红', r: 255, g: 0, b: 255 },
    { name: '金色', r: 255, g: 215, b: 0 },
    { name: '铜色', r: 184, g: 115, b: 51 },
    { name: '青铜色', r: 205, g: 127, b: 50 },
    { name: '铁锈色', r: 183, g: 65, b: 14 },
    { name: '砖红色', r: 178, g: 34, b: 34 },
    { name: '珊瑚粉', r: 255, g: 127, b: 80 },
    { name: '桃色', r: 255, g: 229, b: 180 },
    { name: '杏色', r: 255, g: 235, b: 205 },
    { name: '沙色', r: 244, g: 164, b: 96 },
    { name: '卡其色', r: 240, g: 230, b: 140 },
    { name: '橄榄褐', r: 107, g: 142, b: 35 },
    { name: '苔藓绿', r: 96, g: 130, b: 75 },
    { name: '松绿', r: 42, g: 128, b: 68 },
    { name: '薄荷', r: 152, g: 255, b: 152 },
    { name: '海沫绿', r: 112, g: 193, b: 179 },
    { name: '湖水蓝', r: 102, g: 205, b: 170 },
    { name: '天空蓝', r: 0, g: 191, b: 255 },
    { name: '冰蓝', r: 176, g: 224, b: 230 },
    { name: '雾蓝', r: 112, g: 147, b: 219 },
    { name: '丹宁蓝', r: 25, g: 25, b: 112 },
    { name: '午夜蓝', r: 25, g: 25, b: 112 },
    { name: '蓝宝石', r: 15, g: 82, b: 186 },
    { name: '葡萄紫', r: 106, g: 90, b: 205 },
    { name: '李紫色', r: 142, g: 58, b: 173 },
    { name: '兰花紫', r: 200, g: 162, b: 200 },
    { name: '锦葵紫', r: 156, g: 102, b: 161 },
    { name: '紫水晶', r: 153, g: 102, b: 204 },
    { name: '木槿紫', r: 204, g: 102, b: 255 },
    { name: '茄子紫', r: 97, g: 64, b: 81 },
    { name: '栗色', r: 128, g: 0, b: 0 },
    { name: '勃艮第红', r: 128, g: 0, b: 32 },
    { name: '蔓越莓红', r: 155, g: 21, b: 30 },
    { name: '石榴红', r: 176, g: 23, b: 69 },
    { name: '西瓜红', r: 255, g: 99, b: 71 },
    { name: '番茄红', r: 255, g: 99, b: 71 },
    { name: '辣椒红', r: 227, g: 38, b: 54 },
    { name: '火焰红', r: 255, g: 69, b: 0 },
    { name: '日落橙', r: 253, g: 94, b: 83 },
    { name: '芒果橙', r: 255, g: 167, b: 38 },
    { name: '木瓜橙', r: 255, g: 151, b: 0 },
    { name: '柿子橙', r: 244, g: 131, b: 31 },
    { name: '琥珀色', r: 255, g: 191, b: 0 },
    { name: '蜂蜜色', r: 194, g: 178, b: 128 },
    { name: '黄油色', r: 255, g: 251, b: 222 },
    { name: '香草色', r: 253, g: 255, b: 215 },
    { name: '蛋白色', r: 255, g: 252, b: 240 },
    { name: '珍珠白', r: 234, g: 224, b: 200 },
    { name: '月光白', r: 248, g: 248, b: 255 },
    { name: '雪白', r: 255, g: 250, b: 250 },
    { name: '烟灰', r: 112, g: 128, b: 144 },
    { name: '石板灰', r: 112, g: 128, b: 144 },
    { name: '蓝灰', r: 100, g: 149, b: 237 },
    { name: '炭灰', r: 54, g: 69, b: 79 },
    { name: '枪灰', r: 105, g: 105, b: 105 },
    { name: '铅灰', r: 119, g: 136, b: 153 },
    { name: '银灰', r: 176, g: 196, b: 222 },
    { name: '铂灰', r: 229, g: 228, b: 226 },
    { name: '钛灰', r: 136, g: 136, b: 136 },
    { name: '水泥灰', r: 169, g: 169, b: 169 },
    { name: '沥青灰', r: 61, g: 71, b: 82 },
    { name: '墨黑', r: 0, g: 0, b: 0 },
    { name: '炭黑', r: 20, g: 20, b: 20 },
    { name: '乌黑', r: 10, g: 10, b: 10 },
    { name: '深炭黑', r: 30, g: 30, b: 30 },
    { name: '午夜黑', r: 25, g: 25, b: 25 },
    { name: '咖啡黑', r: 59, g: 41, b: 37 },
    { name: '红木色', r: 165, g: 42, b: 42 },
    { name: '桃花心木', r: 192, g: 101, b: 81 },
    { name: '胡桃木', r: 139, g: 119, b: 101 },
    { name: '橡木色', r: 203, g: 181, b: 151 },
    { name: '枫木色', r: 222, g: 184, b: 135 },
    { name: '桦木色', r: 255, g: 239, b: 213 },
    { name: '松木色', r: 250, g: 218, b: 94 },
    { name: '竹子色', r: 213, g: 219, b: 150 },
    { name: '小麦色', r: 245, g: 222, b: 179 },
    { name: '稻草色', r: 238, g: 214, b: 175 },
    { name: '亚麻色', r: 250, g: 240, b: 230 },
    { name: '燕麦色', r: 233, g: 217, b: 186 },
    { name: '拿铁色', r: 200, g: 173, b: 142 },
    { name: '摩卡色', r: 150, g: 111, b: 84 },
    { name: '焦糖色', r: 199, g: 125, b: 51 },
    { name: '太妃糖色', r: 210, g: 180, b: 140 },
    { name: '花生色', r: 189, g: 155, b: 103 },
    { name: '杏仁色', r: 239, g: 222, b: 205 },
    { name: '椰子色', r: 255, g: 248, b: 220 },
    { name: '奶油杏', r: 255, g: 236, b: 210 },
    { name: '蜜桃色', r: 255, g: 218, b: 185 },
    { name: '珊瑚红', r: 255, g: 114, b: 86 },
    { name: '鲑鱼粉', r: 250, g: 128, b: 114 },
    { name: '虾粉色', r: 255, g: 153, b: 153 },
    { name: '火烈鸟粉', r: 252, g: 116, b: 144 },
    { name: '泡泡糖粉', r: 255, g: 105, b: 180 },
    { name: '芭比粉', r: 255, g: 105, b: 180 },
    { name: '玫红色', r: 255, g: 0, b: 144 },
    { name: '深玫红', r: 219, g: 112, b: 147 },
    { name: '紫罗兰红', r: 219, g: 112, b: 147 },
    { name: '海棠红', r: 255, g: 62, b: 150 },
    { name: '胭脂红', r: 220, g: 20, b: 60 },
    { name: '猩红色', r: 255, g: 14, b: 0 },
    { name: '中国红', r: 227, g: 23, b: 23 },
    { name: '国旗红', r: 204, g: 0, b: 0 },
    { name: '宝石红', r: 224, g: 17, b: 95 },
    { name: ' ruby 红', r: 227, g: 38, b: 54 },
    { name: '深 ruby 红', r: 161, g: 44, b: 81 },
    { name: '桑葚色', r: 134, g: 1, b: 175 },
    { name: '黑莓色', r: 183, g: 90, b: 139 },
    { name: '蓝莓色', r: 86, g: 85, b: 214 },
    { name: '葡萄色', r: 106, g: 90, b: 205 },
    { name: '无花果色', r: 139, g: 119, b: 101 },
    { name: '李子色', r: 221, g: 160, b: 221 },
    { name: '梅子色', r: 142, g: 58, b: 173 },
    { name: '西梅色', r: 156, g: 102, b: 161 },
    { name: '葡萄干色', r: 101, g: 67, b: 33 },
    { name: '红枣色', r: 139, g: 0, b: 0 },
    { name: '枸杞红', r: 217, g: 93, b: 2 },
    { name: '柿子红', r: 244, g: 131, b: 31 },
    { name: '橘子红', r: 255, g: 117, b: 24 },
    { name: '柑橘色', r: 255, g: 153, b: 0 },
    { name: '柠檬绿', r: 204, g: 255, b: 0 },
    { name: '青柠色', r: 50, g: 205, b: 50 },
    { name: '酸橙绿', r: 127, g: 255, b: 0 },
    { name: '黄绿色', r: 173, g: 255, b: 47 },
    { name: '查特酒绿', r: 127, g: 255, b: 0 },
    { name: '绿黄色', r: 173, g: 255, b: 47 },
    { name: '嫩绿色', r: 152, g: 255, b: 152 },
    { name: '新叶绿', r: 135, g: 206, b: 150 },
    { name: '浅嫩绿', r: 127, g: 255, b: 170 },
    { name: '中春绿', r: 0, g: 250, b: 154 },
    { name: '玉色', r: 0, g: 168, b: 107 },
    { name: '翡翠色', r: 0, g: 168, b: 107 },
    { name: '孔雀绿', r: 0, g: 140, b: 72 },
    { name: '鹦鹉绿', r: 76, g: 187, b: 23 },
    { name: '蜥蜴绿', r: 107, g: 142, b: 35 },
    { name: '鳄鱼绿', r: 107, g: 142, b: 35 },
    { name: '恐龙绿', r: 85, g: 107, b: 47 },
    { name: '军绿', r: 75, g: 83, b: 32 },
    { name: '迷彩绿', r: 84, g: 98, b: 41 },
    { name: '坦克绿', r: 64, g: 86, b: 24 },
    { name: '丛林绿', r: 41, g: 88, b: 56 },
    { name: '雨林绿', r: 0, g: 128, b: 64 },
    { name: '深森林绿', r: 1, g: 68, b: 33 },
    { name: '松针绿', r: 31, g: 78, b: 20 },
    { name: '冷杉绿', r: 78, g: 94, b: 52 },
    { name: '雪松绿', r: 67, g: 107, b: 52 },
    { name: '苔原绿', r: 112, g: 128, b: 144 },
    { name: '极地绿', r: 128, g: 153, b: 128 }
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
        // 均匀采样 221 色
        const step = Math.floor(PERLER_COLORS.length / colorCount);
        const palette = [];
        for (let i = 0; i < colorCount && i < PERLER_COLORS.length; i++) {
            palette.push(PERLER_COLORS[i * step]);
        }
        // 确保最后一个颜色是最后一个
        if (palette.length < colorCount) {
            for (let i = palette.length; i < colorCount && i < PERLER_COLORS.length; i++) {
                palette.push(PERLER_COLORS[i]);
            }
        }
        return palette.slice(0, colorCount);
    }

    // 像素化处理 - 根据目标格数计算颗粒度
    pixelate(ctx, originalWidth, originalHeight, targetCols) {
        const imageData = ctx.getImageData(0, 0, originalWidth, originalHeight);
        const data = imageData.data;
        
        // 根据目标列数计算每个像素代表的原始像素大小
        const pixelSize = Math.ceil(originalWidth / targetCols);
        const cols = targetCols;
        const rows = Math.ceil(originalHeight / pixelSize);
        
        const pixels = [];
        
        for (let row = 0; row < rows; row++) {
            pixels[row] = [];
            for (let col = 0; col < cols; col++) {
                const x = col * pixelSize;
                const y = row * pixelSize;
                
                let totalR = 0, totalG = 0, totalB = 0, count = 0;
                
                // 计算这个区域的平均颜色
                for (let dy = 0; dy < pixelSize && y + dy < originalHeight; dy++) {
                    for (let dx = 0; dx < pixelSize && x + dx < originalWidth; dx++) {
                        const idx = ((y + dy) * originalWidth + (x + dx)) * 4;
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
                const maxWidth = parseInt(document.getElementById('maxWidth').value);
                const colorCount = parseInt(document.getElementById('colorCount').value);
                const outputStyle = document.getElementById('outputStyle').value);

                // 获取图片尺寸
                const originalCanvas = document.getElementById('originalCanvas');
                const width = originalCanvas.width;
                const height = originalCanvas.height;

                // 像素化处理 - 现在直接使用目标格数（格数越多，颗粒度越高）
                const ctx = originalCanvas.getContext('2d');
                const { pixels, cols, rows } = converter.pixelate(ctx, width, height, maxWidth);

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
