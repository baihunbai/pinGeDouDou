// 拼豆颜色库（221 色完整版）- 使用标准 A-M+ 数字编号
const PERLER_COLORS = [
    { name: 'A01 白色', r: 255, g: 255, b: 255 },
    { name: 'A02 黑色', r: 0, g: 0, b: 0 },
    { name: 'A03 灰色', r: 128, g: 128, b: 128 },
    { name: 'A04 深灰', r: 64, g: 64, b: 64 },
    { name: 'A05 浅灰', r: 192, g: 192, b: 192 },
    { name: 'A06 银色', r: 192, g: 192, b: 192 },
    { name: 'A07 红色', r: 255, g: 0, b: 0 },
    { name: 'A08 深红', r: 139, g: 0, b: 0 },
    { name: 'A09 鲜红', r: 255, g: 36, b: 0 },
    { name: 'A10 酒红', r: 128, g: 0, b: 32 },
    { name: 'A11 樱桃红', r: 144, g: 0, b: 64 },
    { name: 'A12 粉色', r: 255, g: 192, b: 203 },
    { name: 'A13 深粉', r: 255, g: 105, b: 180 },
    { name: 'A14 浅粉', r: 255, g: 182, b: 193 },
    { name: 'A15 桃粉', r: 255, g: 153, b: 153 },
    { name: 'A16 玫瑰粉', r: 255, g: 0, b: 127 },
    { name: 'A17 橙色', r: 255, g: 165, b: 0 },
    { name: 'A18 深橙', r: 255, g: 140, b: 0 },
    { name: 'A19 浅橙', r: 255, g: 179, b: 71 },
    { name: 'A20 珊瑚橙', r: 255, g: 127, b: 80 },
    { name: 'A21 南瓜橙', r: 255, g: 117, b: 24 },
    { name: 'A22 黄色', r: 255, g: 255, b: 0 },
    { name: 'A23 深黄', r: 255, g: 215, b: 0 },
    { name: 'A24 浅黄', r: 255, g: 255, b: 102 },
    { name: 'A25 柠檬黄', r: 255, g: 247, b: 0 },
    { name: 'A26 金黄', r: 255, g: 223, b: 0 },
    { name: 'A27 米色', r: 245, g: 245, b: 220 },
    { name: 'A28 奶油色', r: 255, g: 253, b: 208 },
    { name: 'A29 象牙白', r: 255, g: 255, b: 240 },
    { name: 'A30 肤色', r: 255, g: 218, b: 185 },
    { name: 'B01 深肤色', r: 210, g: 180, b: 140 },
    { name: 'B02 浅肤色', r: 255, g: 224, b: 189 },
    { name: 'B03 棕褐色', r: 210, g: 180, b: 140 },
    { name: 'B04 棕色', r: 139, g: 69, b: 19 },
    { name: 'B05 深棕', r: 101, g: 67, b: 33 },
    { name: 'B06 浅棕', r: 181, g: 137, b: 93 },
    { name: 'B07 咖啡棕', r: 111, g: 78, b: 55 },
    { name: 'B08 巧克力棕', r: 94, g: 53, b: 57 },
    { name: 'B09 栗子棕', r: 149, g: 69, b: 53 },
    { name: 'B10 赭石色', r: 168, g: 95, b: 53 },
    { name: 'B11 绿色', r: 0, g: 255, b: 0 },
    { name: 'B12 深绿', r: 0, g: 100, b: 0 },
    { name: 'B13 浅绿', r: 144, g: 238, b: 144 },
    { name: 'B14 草绿', r: 0, g: 128, b: 0 },
    { name: 'B15 橄榄绿', r: 128, g: 128, b: 0 },
    { name: 'B16 森林绿', r: 34, g: 139, b: 34 },
    { name: 'B17 薄荷绿', r: 189, g: 252, b: 201 },
    { name: 'B18 青绿', r: 0, g: 128, b: 128 },
    { name: 'B19 翡翠绿', r: 0, g: 201, b: 87 },
    { name: 'B20 苹果绿', r: 142, g: 220, b: 51 },
    { name: 'B21 石灰绿', r: 50, g: 205, b: 50 },
    { name: 'B22 春绿', r: 0, g: 255, b: 127 },
    { name: 'B23 海藻绿', r: 46, g: 139, b: 87 },
    { name: 'B24 鼠尾草绿', r: 135, g: 169, b: 107 },
    { name: 'B25 青色', r: 0, g: 255, b: 255 },
    { name: 'B26 深青', r: 0, g: 139, b: 139 },
    { name: 'B27 浅青', r: 224, g: 255, b: 255 },
    { name: 'B28 绿松石', r: 64, g: 224, b: 208 },
    { name: 'B29 水绿色', r: 127, g: 255, b: 212 },
    { name: 'B30 蓝色', r: 0, g: 0, b: 255 },
    { name: 'C01 深蓝', r: 0, g: 0, b: 139 },
    { name: 'C02 浅蓝', r: 173, g: 216, b: 230 },
    { name: 'C03 天蓝', r: 135, g: 206, b: 235 },
    { name: 'C04 海军蓝', r: 0, g: 0, b: 128 },
    { name: 'C05 宝蓝', r: 0, g: 105, b: 148 },
    { name: 'C06 皇家蓝', r: 65, g: 105, b: 225 },
    { name: 'C07 钴蓝', r: 0, g: 71, b: 171 },
    { name: 'C08 靛蓝', r: 75, g: 0, b: 130 },
    { name: 'C09 紫罗兰', r: 148, g: 0, b: 211 },
    { name: 'C10 紫色', r: 128, g: 0, b: 128 },
    { name: 'C11 深紫', r: 75, g: 0, b: 130 },
    { name: 'C12 浅紫', r: 216, g: 191, b: 216 },
    { name: 'C13 淡紫', r: 221, g: 160, b: 221 },
    { name: 'C14 薰衣草', r: 230, g: 230, b: 250 },
    { name: 'C15 梅红', r: 221, g: 84, b: 0 },
    { name: 'C16 紫红', r: 192, g: 0, b: 192 },
    { name: 'C17 洋红', r: 255, g: 0, b: 255 },
    { name: 'C18 金色', r: 255, g: 215, b: 0 },
    { name: 'C19 铜色', r: 184, g: 115, b: 51 },
    { name: 'C20 青铜色', r: 205, g: 127, b: 50 },
    { name: 'C21 铁锈色', r: 183, g: 65, b: 14 },
    { name: 'C22 砖红色', r: 178, g: 34, b: 34 },
    { name: 'C23 珊瑚粉', r: 255, g: 127, b: 80 },
    { name: 'C24 桃色', r: 255, g: 229, b: 180 },
    { name: 'C25 杏色', r: 255, g: 235, b: 205 },
    { name: 'C26 沙色', r: 244, g: 164, b: 96 },
    { name: 'C27 卡其色', r: 240, g: 230, b: 140 },
    { name: 'C28 橄榄褐', r: 107, g: 142, b: 35 },
    { name: 'C29 苔藓绿', r: 96, g: 130, b: 75 },
    { name: 'C30 松绿', r: 42, g: 128, b: 68 },
    { name: 'D01 薄荷', r: 152, g: 255, b: 152 },
    { name: 'D02 海沫绿', r: 112, g: 193, b: 179 },
    { name: 'D03 湖水蓝', r: 102, g: 205, b: 170 },
    { name: 'D04 天空蓝', r: 0, g: 191, b: 255 },
    { name: 'D05 冰蓝', r: 176, g: 224, b: 230 },
    { name: 'D06 雾蓝', r: 112, g: 147, b: 219 },
    { name: 'D07 丹宁蓝', r: 25, g: 25, b: 112 },
    { name: 'D08 午夜蓝', r: 25, g: 25, b: 112 },
    { name: 'D09 蓝宝石', r: 15, g: 82, b: 186 },
    { name: 'D10 葡萄紫', r: 106, g: 90, b: 205 },
    { name: 'D11 李紫色', r: 142, g: 58, b: 173 },
    { name: 'D12 兰花紫', r: 200, g: 162, b: 200 },
    { name: 'D13 锦葵紫', r: 156, g: 102, b: 161 },
    { name: 'D14 紫水晶', r: 153, g: 102, b: 204 },
    { name: 'D15 木槿紫', r: 204, g: 102, b: 255 },
    { name: 'D16 茄子紫', r: 97, g: 64, b: 81 },
    { name: 'D17 栗色', r: 128, g: 0, b: 0 },
    { name: 'D18 勃艮第红', r: 128, g: 0, b: 32 },
    { name: 'D19 蔓越莓红', r: 155, g: 21, b: 30 },
    { name: 'D20 石榴红', r: 176, g: 23, b: 69 },
    { name: 'D21 西瓜红', r: 255, g: 99, b: 71 },
    { name: 'D22 番茄红', r: 255, g: 99, b: 71 },
    { name: 'D23 辣椒红', r: 227, g: 38, b: 54 },
    { name: 'D24 火焰红', r: 255, g: 69, b: 0 },
    { name: 'D25 日落橙', r: 253, g: 94, b: 83 },
    { name: 'D26 芒果橙', r: 255, g: 167, b: 38 },
    { name: 'D27 木瓜橙', r: 255, g: 151, b: 0 },
    { name: 'D28 柿子橙', r: 244, g: 131, b: 31 },
    { name: 'D29 琥珀色', r: 255, g: 191, b: 0 },
    { name: 'D30 蜂蜜色', r: 194, g: 178, b: 128 },
    { name: 'E01 黄油色', r: 255, g: 251, b: 222 },
    { name: 'E02 香草色', r: 253, g: 255, b: 215 },
    { name: 'E03 蛋白色', r: 255, g: 252, b: 240 },
    { name: 'E04 珍珠白', r: 234, g: 224, b: 200 },
    { name: 'E05 月光白', r: 248, g: 248, b: 255 },
    { name: 'E06 雪白', r: 255, g: 250, b: 250 },
    { name: 'E07 烟灰', r: 112, g: 128, b: 144 },
    { name: 'E08 石板灰', r: 112, g: 128, b: 144 },
    { name: 'E09 蓝灰', r: 100, g: 149, b: 237 },
    { name: 'E10 炭灰', r: 54, g: 69, b: 79 },
    { name: 'E11 枪灰', r: 105, g: 105, b: 105 },
    { name: 'E12 铅灰', r: 119, g: 136, b: 153 },
    { name: 'E13 银灰', r: 176, g: 196, b: 222 },
    { name: 'E14 铂灰', r: 229, g: 228, b: 226 },
    { name: 'E15 钛灰', r: 136, g: 136, b: 136 },
    { name: 'E16 水泥灰', r: 169, g: 169, b: 169 },
    { name: 'E17 沥青灰', r: 61, g: 71, b: 82 },
    { name: 'E18 墨黑', r: 0, g: 0, b: 0 },
    { name: 'E19 炭黑', r: 20, g: 20, b: 20 },
    { name: 'E20 乌黑', r: 10, g: 10, b: 10 },
    { name: 'E21 深炭黑', r: 30, g: 30, b: 30 },
    { name: 'E22 午夜黑', r: 25, g: 25, b: 25 },
    { name: 'E23 咖啡黑', r: 59, g: 41, b: 37 },
    { name: 'E24 红木色', r: 165, g: 42, b: 42 },
    { name: 'E25 桃花心木', r: 192, g: 101, b: 81 },
    { name: 'E26 胡桃木', r: 139, g: 119, b: 101 },
    { name: 'E27 橡木色', r: 203, g: 181, b: 151 },
    { name: 'E28 枫木色', r: 222, g: 184, b: 135 },
    { name: 'E29 桦木色', r: 255, g: 239, b: 213 },
    { name: 'E30 松木色', r: 250, g: 218, b: 94 },
    { name: 'F01 竹子色', r: 213, g: 219, b: 150 },
    { name: 'F02 小麦色', r: 245, g: 222, b: 179 },
    { name: 'F03 稻草色', r: 238, g: 214, b: 175 },
    { name: 'F04 亚麻色', r: 250, g: 240, b: 230 },
    { name: 'F05 燕麦色', r: 233, g: 217, b: 186 },
    { name: 'F06 拿铁色', r: 200, g: 173, b: 142 },
    { name: 'F07 摩卡色', r: 150, g: 111, b: 84 },
    { name: 'F08 焦糖色', r: 199, g: 125, b: 51 },
    { name: 'F09 太妃糖色', r: 210, g: 180, b: 140 },
    { name: 'F10 花生色', r: 189, g: 155, b: 103 },
    { name: 'F11 杏仁色', r: 239, g: 222, b: 205 },
    { name: 'F12 椰子色', r: 255, g: 248, b: 220 },
    { name: 'F13 奶油杏', r: 255, g: 236, b: 210 },
    { name: 'F14 蜜桃色', r: 255, g: 218, b: 185 },
    { name: 'F15 珊瑚红', r: 255, g: 114, b: 86 },
    { name: 'F16 鲑鱼粉', r: 250, g: 128, b: 114 },
    { name: 'F17 虾粉色', r: 255, g: 153, b: 153 },
    { name: 'F18 火烈鸟粉', r: 252, g: 116, b: 144 },
    { name: 'F19 泡泡糖粉', r: 255, g: 105, b: 180 },
    { name: 'F20 芭比粉', r: 255, g: 105, b: 180 },
    { name: 'F21 玫红色', r: 255, g: 0, b: 144 },
    { name: 'F22 深玫红', r: 219, g: 112, b: 147 },
    { name: 'F23 紫罗兰红', r: 219, g: 112, b: 147 },
    { name: 'F24 海棠红', r: 255, g: 62, b: 150 },
    { name: 'F25 胭脂红', r: 220, g: 20, b: 60 },
    { name: 'F26 猩红色', r: 255, g: 14, b: 0 },
    { name: 'F27 中国红', r: 227, g: 23, b: 23 },
    { name: 'F28 国旗红', r: 204, g: 0, b: 0 },
    { name: 'F29 宝石红', r: 224, g: 17, b: 95 },
    { name: 'F30  ruby 红', r: 227, g: 38, b: 54 },
    { name: 'G01 深 ruby 红', r: 161, g: 44, b: 81 },
    { name: 'G02 桑葚色', r: 134, g: 1, b: 175 },
    { name: 'G03 黑莓色', r: 183, g: 90, b: 139 },
    { name: 'G04 蓝莓色', r: 86, g: 85, b: 214 },
    { name: 'G05 葡萄色', r: 106, g: 90, b: 205 },
    { name: 'G06 无花果色', r: 139, g: 119, b: 101 },
    { name: 'G07 李子色', r: 221, g: 160, b: 221 },
    { name: 'G08 梅子色', r: 142, g: 58, b: 173 },
    { name: 'G09 西梅色', r: 156, g: 102, b: 161 },
    { name: 'G10 葡萄干色', r: 101, g: 67, b: 33 },
    { name: 'G11 红枣色', r: 139, g: 0, b: 0 },
    { name: 'G12 枸杞红', r: 217, g: 93, b: 2 },
    { name: 'G13 柿子红', r: 244, g: 131, b: 31 },
    { name: 'G14 橘子红', r: 255, g: 117, b: 24 },
    { name: 'G15 柑橘色', r: 255, g: 153, b: 0 },
    { name: 'G16 柠檬绿', r: 204, g: 255, b: 0 },
    { name: 'G17 青柠色', r: 50, g: 205, b: 50 },
    { name: 'G18 酸橙绿', r: 127, g: 255, b: 0 },
    { name: 'G19 黄绿色', r: 173, g: 255, b: 47 },
    { name: 'G20 查特酒绿', r: 127, g: 255, b: 0 },
    { name: 'G21 绿黄色', r: 173, g: 255, b: 47 },
    { name: 'G22 嫩绿色', r: 152, g: 255, b: 152 },
    { name: 'G23 新叶绿', r: 135, g: 206, b: 150 },
    { name: 'G24 浅嫩绿', r: 127, g: 255, b: 170 },
    { name: 'G25 中春绿', r: 0, g: 250, b: 154 },
    { name: 'G26 玉色', r: 0, g: 168, b: 107 },
    { name: 'G27 翡翠色', r: 0, g: 168, b: 107 },
    { name: 'G28 孔雀绿', r: 0, g: 140, b: 72 },
    { name: 'G29 鹦鹉绿', r: 76, g: 187, b: 23 },
    { name: 'G30 蜥蜴绿', r: 107, g: 142, b: 35 },
    { name: 'H01 鳄鱼绿', r: 107, g: 142, b: 35 },
    { name: 'H02 恐龙绿', r: 85, g: 107, b: 47 },
    { name: 'H03 军绿', r: 75, g: 83, b: 32 },
    { name: 'H04 迷彩绿', r: 84, g: 98, b: 41 },
    { name: 'H05 坦克绿', r: 64, g: 86, b: 24 },
    { name: 'H06 丛林绿', r: 41, g: 88, b: 56 },
    { name: 'H07 雨林绿', r: 0, g: 128, b: 64 },
    { name: 'H08 深森林绿', r: 1, g: 68, b: 33 },
    { name: 'H09 松针绿', r: 31, g: 78, b: 20 },
    { name: 'H10 冷杉绿', r: 78, g: 94, b: 52 },
    { name: 'H11 雪松绿', r: 67, g: 107, b: 52 },
    { name: 'H12 苔原绿', r: 112, g: 128, b: 144 },
    { name: 'H13 极地绿', r: 128, g: 153, b: 128 },
    { name: 'H14 荧光绿', r: 0, g: 255, b: 127 },
    { name: 'H15 荧光粉', r: 255, g: 0, b: 255 },
    { name: 'H16 荧光橙', r: 255, g: 102, b: 0 },
    { name: 'H17 荧光黄', r: 255, g: 255, b: 0 },
    { name: 'H18 夜光绿', r: 50, g: 205, b: 50 },
    { name: 'H19 夜光蓝', r: 0, g: 191, b: 255 },
    { name: 'H20 珠光白', r: 255, g: 255, b: 255 },
    { name: 'H21 珠光粉', r: 255, g: 182, b: 193 },
    { name: 'H22 珠光蓝', r: 135, g: 206, b: 235 },
    { name: 'H23 珠光紫', r: 221, g: 160, b: 221 },
    { name: 'H24 金属红', r: 220, g: 20, b: 60 },
    { name: 'H25 金属蓝', r: 0, g: 105, b: 148 },
    { name: 'H26 金属绿', r: 0, g: 168, b: 107 },
    { name: 'H27 透明红', r: 255, g: 50, b: 50 },
    { name: 'H28 透明蓝', r: 50, g: 50, b: 255 },
    { name: 'H29 透明绿', r: 50, g: 255, b: 50 },
    { name: 'H30 透明黄', r: 255, g: 255, b: 50 },
    { name: 'M01 混色红', r: 255, g: 100, b: 100 },
    { name: 'M02 混色蓝', r: 100, g: 100, b: 255 },
    { name: 'M03 混色绿', r: 100, g: 255, b: 100 },
    { name: 'M04 混色黄', r: 255, g: 255, b: 100 },
    { name: 'M05 混色紫', r: 200, g: 100, b: 200 },
    { name: 'M06 混色橙', r: 255, g: 150, b: 50 },
    { name: 'M07 混色粉', r: 255, g: 150, b: 200 },
    { name: 'M08 混色棕', r: 150, g: 100, b: 50 },
    { name: 'M09 彩虹红', r: 255, g: 0, b: 100 },
    { name: 'M10 彩虹橙', r: 255, g: 127, b: 0 },
    { name: 'M11 彩虹黄', r: 255, g: 255, b: 0 },
    { name: 'M12 彩虹绿', r: 0, g: 255, b: 0 },
    { name: 'M13 彩虹蓝', r: 0, g: 100, b: 255 },
    { name: 'M14 彩虹紫', r: 150, g: 0, b: 255 },
    { name: 'M15 渐变粉', r: 255, g: 180, b: 200 },
    { name: 'M16 渐变蓝', r: 180, g: 200, b: 255 },
    { name: 'M17 渐变绿', r: 180, g: 255, b: 200 },
    { name: 'M18 星空黑', r: 20, g: 20, b: 40 },
    { name: 'M19 银河紫', r: 100, g: 50, b: 150 },
    { name: 'M20 宇宙蓝', r: 30, g: 50, b: 100 },
    { name: 'M21 沙漠金', r: 200, g: 170, b: 100 }
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

    // 计算文字颜色（根据背景亮度决定用黑色还是白色）
    getTextColor(r, g, b) {
        // 计算亮度
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? '#000000' : '#ffffff';
    }

    // 计算边框颜色（根据背景亮度决定用深色还是浅色）
    getBorderColor(r, g, b) {
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        // 深色背景用浅色边框，浅色背景用深色边框
        return brightness > 128 ? '#555555' : '#cccccc';
    }

    // 绘制带描边的文字
    drawTextWithStroke(ctx, text, x, y, fillColor, strokeColor = '#000000', strokeWidth = 2) {
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // 先画描边
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.strokeText(text, x, y);
        // 再画填充
        ctx.fillStyle = fillColor;
        ctx.fillText(text, x, y);
    }

    // 获取列字母标签（A, B, C, ..., Z, AA, AB, ...）
    getColumnLabel(col) {
        let label = '';
        let n = col;
        while (n >= 0) {
            label = String.fromCharCode(65 + (n % 26)) + label;
            n = Math.floor(n / 26) - 1;
        }
        return label;
    }

    // 绘制拼豆图案（带坐标和色号）
    drawPattern(canvas, pattern, cols, rows, style) {
        const ctx = canvas.getContext('2d');
        const cellSize = 28; // 增大格子以容纳文字
        const gap = 1;
        const labelSize = 35; // 坐标标签区域大小
        
        // 计算画布大小（包含坐标标签区域）
        const width = cols * (cellSize + gap) + labelSize;
        const height = rows * (cellSize + gap) + labelSize;
        
        canvas.width = width;
        canvas.height = height;
        
        // 背景
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        
        // 绘制坐标标签区域背景
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, labelSize, labelSize); // 左上角
        ctx.fillRect(labelSize, 0, width - labelSize, labelSize); // 顶部列标签
        ctx.fillRect(0, labelSize, labelSize, height - labelSize); // 左侧行标签
        
        // 绘制列标签（A, B, C...）
        ctx.fillStyle = '#333333';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let col = 0; col < cols; col++) {
            const x = col * (cellSize + gap) + labelSize + (cellSize + gap) / 2;
            const y = labelSize / 2;
            ctx.fillText(this.getColumnLabel(col), x, y);
        }
        
        // 绘制行标签（1, 2, 3...）
        ctx.textAlign = 'right';
        for (let row = 0; row < rows; row++) {
            const x = labelSize - 5;
            const y = row * (cellSize + gap) + labelSize + (cellSize + gap) / 2;
            ctx.fillText((row + 1).toString(), x, y);
        }
        
        // 绘制每个豆子
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const color = pattern[row][col];
                const x = col * (cellSize + gap) + labelSize;
                const y = row * (cellSize + gap) + labelSize;
                
                if (style === 'grid' || style === 'both') {
                    // 网格样式 - 正方形
                    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
                    ctx.fillRect(x, y, cellSize, cellSize);
                    
                    // 边框 - 每 5 格加粗左边和上边，颜色根据背景动态调整
                    const isThickRow = (row % 5 === 0);
                    const isThickCol = (col % 5 === 0);
                    
                    // 计算亮度用于边框颜色
                    const brightness = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
                    const borderColor = this.getBorderColor(color.r, color.g, color.b);
                    const thickBorderColor = brightness > 128 ? '#333333' : '#eeeeee';
                    
                    // 细线边框（默认）
                    ctx.strokeStyle = borderColor;
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, cellSize, cellSize);
                    
                    // 每 5 格加粗左边线
                    if (isThickCol) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x, y + cellSize);
                        ctx.strokeStyle = thickBorderColor;
                        ctx.lineWidth = 3;
                        ctx.stroke();
                    }
                    
                    // 每 5 格加粗上边线
                    if (isThickRow) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x + cellSize, y);
                        ctx.strokeStyle = thickBorderColor;
                        ctx.lineWidth = 3;
                        ctx.stroke();
                    }
                    
                    // 绘制色号文字（带描边）
                    const textColor = this.getTextColor(color.r, color.g, color.b);
                    const textStrokeColor = textColor === '#000000' ? '#ffffff' : '#000000';
                    const colorCode = color.name.split(' ')[0];
                    this.drawTextWithStroke(ctx, colorCode, x + cellSize / 2, y + cellSize / 2, textColor, textStrokeColor, 2);
                } else if (style === 'dots') {
                    // 圆点样式 - 圆形
                    ctx.beginPath();
                    ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2 - 1, 0, Math.PI * 2);
                    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
                    ctx.fill();
                    
                    // 绘制色号文字
                    const textColor = this.getTextColor(color.r, color.g, color.b);
                    ctx.fillStyle = textColor;
                    ctx.font = 'bold 8px sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    const colorCode = color.name.split(' ')[0];
                    ctx.fillText(colorCode, x + cellSize / 2, y + cellSize / 2);
                }
            }
        }
        
        // 绘制坐标轴线
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(labelSize, 0);
        ctx.lineTo(labelSize, height);
        ctx.moveTo(0, labelSize);
        ctx.lineTo(width, labelSize);
        ctx.stroke();
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
                const outputStyle = document.getElementById('outputStyle').value;

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
