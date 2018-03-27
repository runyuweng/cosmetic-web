/*
 Navicat Premium Data Transfer

 Source Server         : aliyun
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : 47.95.234.220
 Source Database       : cosmetic

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : utf-8

 Date: 03/27/2018 11:08:38 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `addresses`
-- ----------------------------
DROP TABLE IF EXISTS `addresses`;
CREATE TABLE `addresses` (
  `addressId` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `addressTel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `addressProvince` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `addressCity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `addressDetail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `addressCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `addressUserName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int(10) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`addressId`),
  KEY `userId` (`userId`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `addresses`
-- ----------------------------
BEGIN;
INSERT INTO `addresses` VALUES ('1', '13129910519', '湖北', '武汉', '中南民族大学', '213000', '吕政伊', '1');
COMMIT;

-- ----------------------------
--  Table structure for `brands`
-- ----------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `brandId` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `brandName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brandIntro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brandCountry` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brandUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brandIsVerified` int(11) DEFAULT NULL,
  PRIMARY KEY (`brandId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `brands`
-- ----------------------------
BEGIN;
INSERT INTO `brands` VALUES ('1', 'SK-II', 'SK-II诞生于日本，是日本皮肤专家将尖端科技运用到护肤品开发中的完美结晶，是在东亚以及东南亚等地区深受欢迎的护肤品牌。', '日本', 'https://www.skii.com.cn/', '1'), ('2', '阿芙', '阿芙创办于2006年，是国内精油美妆类领先品牌，以“阿芙，就是精油”被业内熟知。在全国一二线城市设有四百余家形象专柜。线上渠道覆盖各大主流平台，在精油及精油美妆品类的占有率始终遥遥领先；同时，阿芙的创意营销和粉丝经济也在业内有极大的影响力。', '中国', null, '1'), ('3', '百雀羚', '自1931年诞生至今，百雀羚始终秉承“天然、不刺激”的东方护肤理念。以天然草本之力，演绎东方美丽传奇。', '中国', 'http://www.pechoin.com/', null), ('4', '比度克', '比度克是广州市中通生化制品有限公司旗下品牌。[1]  国际知名药妆品牌，针对痘痘、痘印、粉刺、黑头等普遍出现的皮肤问题，专门解决问题肌肤的品牌。', '中国', 'http://www.bedook.cn/', null), ('5', '曼秀雷敦', '曼秀雷敦 (Mentholatum) 公司1889年在美国创立，创办人希尔先生成功创制曼秀雷敦薄荷膏，迅即成为家喻户晓的必备良药，曼秀雷敦 (Mentholatum) 的英文名字“Mentholatum”是由“MENTHOL”(薄荷醇)及“PETROLATUM”(石腊油)组合而成。', '美国', 'http://www.mentholatum.com.cn/', null), ('6', 'VOV', '韩国本土最受欢迎的彩妆品牌，由韩国著名化妆品生产公司CAMMON(夏梦)生产。', '韩国', 'http://www.myvov.cc/', null);
COMMIT;

-- ----------------------------
--  Table structure for `imgs`
-- ----------------------------
DROP TABLE IF EXISTS `imgs`;
CREATE TABLE `imgs` (
  `imgId` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `imgName` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`imgId`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `imgs`
-- ----------------------------
BEGIN;
INSERT INTO `imgs` VALUES ('1', null, '4979006620344-110.jpg'), ('2', null, '4979006620344-651.jpg'), ('3', null, '4979006620344-652.jpg'), ('4', null, '4979006620344-653.jpg'), ('5', null, '4979006620344-654.jpg'), ('6', null, '4979006041453-110.jpg'), ('7', null, '4979006041453-651.jpg'), ('8', null, '4979006041453-652.jpg'), ('9', null, '4979006041453-653.jpg'), ('10', null, '4979006046953-110.jpg'), ('11', null, '4979006046953-651.jpg'), ('12', null, '4979006046953-652.jpg'), ('13', null, '4979006595840-110.jpg'), ('14', null, '4979006595840-651.jpg'), ('15', null, '4979006595840-652.jpg'), ('16', null, '4979006595840-653.jpg'), ('17', null, 'f37a6616b0d5464c85b923bf0e6fd826-110.jpg'), ('18', null, '083a94ef72e54f5fae4fa8e61f76a497-651.jpg'), ('19', null, 'f1e56bec627641c8875ec4c6bbe5a2a7-651.jpg'), ('20', null, '0eb7e5b7-0fd4-42f3-a006-1e40c58de6d4.jpg'), ('21', null, '65e47cda-d35e-4e6c-8f41-6a823a539164.jpg'), ('22', null, '904101e6-19cc-4d0b-a6bf-ce8a16aa9c7c.jpg'), ('23', null, '4979006066999-110.jpg'), ('24', null, '4979006066999-651.jpg'), ('25', null, '4979006066999-652.jpg'), ('26', null, '74a2fcef-9252-48cc-adeb-bab128dd05fe.jpg'), ('27', null, '6927006117263-651.jpg'), ('28', null, '6927006117263-652.jpg'), ('29', null, '6927006117263-653.jpg'), ('30', null, '6927006117263-654.jpg'), ('31', null, '6927006117263-655.jpg'), ('32', null, '9688684a-452d-43da-97e0-5bd8a6d164db.jpg'), ('33', null, '4583af58f94c42f59e519bcf078a5e2a-651.jpg'), ('34', null, '7a925345-f2a7-4a1c-bef9-71e48cf25e45.jpg'), ('35', null, '22697ccd4d2147a89eb9093c6bef093d-651.jpg'), ('36', null, '6d2a7147e9e6433ca7ffbd9755e7c418-651.jpg'), ('37', null, '6927006117591-110.jpg'), ('38', null, '6927006117591-651.jpg'), ('39', null, '6927006117706-110.jpg'), ('40', null, '6927006117706-651.jpg'), ('41', null, '6927006117706-652.jpg'), ('42', null, 'c2677b33f4784ba6af9d03416b0bdada-110.jpg'), ('43', null, 'e4a44ab097b040b5b8101ffb9652b498-651.jpg'), ('44', null, '172fe13496b74117a492c87253cc4ab5-110.jpg'), ('45', null, '9d2540634b4440888d0f11ebd56dbfc9-651.jpg'), ('46', null, '6cc5bcb17bed49d98f28810322d0cd03-110.jpg'), ('47', null, '8d66146c76e44b3a838b2c8eb52ef4fa-651.jpg'), ('48', null, 'acd1153ecfe24d13a0fe06a40cf9ebcd-110.jpg'), ('49', null, '042e61cb8da247fbb103234bab5ff11a-651.jpg'), ('50', null, '8cd2a001d6864198b9d9e6ccba823fa1-110.jpg'), ('51', null, '979c2d5b44124e1699b86719fe7fb856-651.jpg'), ('52', null, '15f4923a84df4a3c87dbb187f62e022f-110.jpg'), ('53', null, '6f7822f899c1400eb037af514e0f13bf-651.jpg'), ('54', null, 'a132676a-cc4f-466e-addb-1be067251334.jpg'), ('55', null, 'a7495246f4554e3dba333be079749289-651.jpg'), ('56', null, '9bc17b40-75b2-4d8f-8d8b-ae3b82a99b25.jpg'), ('57', null, '7cffb7926b454679950f97ca1182091d-651.jpg'), ('58', null, 'b7ec421d-22f0-4531-9ce1-31cdd481c05c.jpg'), ('59', null, '6748713449a44bf3bde1bc43781e527e-651.jpg'), ('60', null, 'efdd6e20-fe22-4f35-8eba-a7c35a04e15f.jpg'), ('61', null, 'd7bb72f8-9ccd-4ba3-9c3a-1008a352250f.jpg'), ('62', null, 'ce1f7703-dc47-4a1f-a04a-18781c036e5c.jpg'), ('63', null, '85434985-da70-4eae-9f90-7f86119c7d92.jpg'), ('64', null, '9351855c070448fb869c38821dab0d29-651.jpg'), ('65', null, '1af748a3-9630-40d9-b9fa-b68211b61c48.jpg'), ('66', null, '3aceef58a5a54b25b2d011c7a14633cc-651.jpg'), ('67', null, 'b71b006e-490c-40e4-a42a-f4e31958ee2c.jpg'), ('68', null, '3483d65f-48a9-4d1a-96e0-f9d8dcb4179a.jpg'), ('69', null, 'bbfb08a8-fee8-437b-a9db-3837aa39663b.jpg'), ('70', null, '6927006117898-110.jpg'), ('71', null, '6927006117898-651.jpg'), ('72', null, '6927006117898-652.jpg'), ('73', null, '6927006117898-653.jpg'), ('74', null, '6927006117898-654.jpg'), ('75', null, '6927006117898-655.jpg'), ('76', null, '6011e98d5b4743afa721329e0e6d2140-110.jpg'), ('77', null, '2fe57ce8-9f14-426a-a3d3-e7f000ac9488.jpg'), ('78', null, 'c9f89241-3d52-4216-86aa-a551f17b8a0b.jpg'), ('79', null, '830df71c-5de5-459c-b4cc-abaa24b10f91.jpg'), ('80', null, '6927006112435-110.jpg'), ('81', null, '6927006112435-651.jpg'), ('82', null, 'b20394ea-df13-4744-b1d4-8acc465a66f4.jpg'), ('83', null, 'acd9947a-51c8-40ea-a48f-453ae1d10fa5.jpg'), ('84', null, 'ee5b6513-7378-4db1-ad76-fd6e2fe8e001.jpg'), ('85', null, '746077a527394f3abd95dc0afcfbdd73-651.jpg'), ('86', null, 'd4b51ee709bb45c9a051f70db56b39ff-651.jpg'), ('87', null, '905e233b-3dea-4f58-bfbe-51c46b072014.jpg'), ('88', null, '8a8d9003-2aa6-4210-8571-57ba6ac76e6a.jpg'), ('89', null, '201811010115-110.jpg'), ('90', null, '201811010115-651.jpg'), ('91', null, '201811010115-652.jpg'), ('92', null, '201811022810-110.jpg'), ('93', null, '201811022810-651.jpg'), ('94', null, '201811022810-652.jpg');
COMMIT;

-- ----------------------------
--  Table structure for `ops`
-- ----------------------------
DROP TABLE IF EXISTS `ops`;
CREATE TABLE `ops` (
  `opId` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `orderId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productId` int(11) unsigned zerofill DEFAULT NULL,
  `productNum` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productPrice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`opId`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  KEY `productId_2` (`productId`),
  CONSTRAINT `ops_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `ops_ibfk_3` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `ops`
-- ----------------------------
BEGIN;
INSERT INTO `ops` VALUES ('1', '15220543920001', '1', '1', '740', 'SK-II 护肤面膜6片 面膜 前男友面膜 保湿');
COMMIT;

-- ----------------------------
--  Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `orderId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) unsigned zerofill DEFAULT NULL,
  `addressId` int(11) unsigned zerofill DEFAULT NULL,
  `orderDispatchTime` varchar(255) DEFAULT NULL,
  `orderCreateTime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`orderId`),
  KEY `userId` (`userId`),
  KEY `addressId` (`addressId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`addressId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `orders`
-- ----------------------------
BEGIN;
INSERT INTO `orders` VALUES ('15220543090001', '1', '1', null, '1522054309000'), ('15220543180001', '1', '1', null, '1522054318000'), ('15220543430001', '1', '1', null, '1522054343000'), ('15220543920001', '1', '1', null, '1522054392000');
COMMIT;

-- ----------------------------
--  Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `productId` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productIntro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productPrice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productAmount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productAbundance` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productSeason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productApplicant` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productImgId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productRelatedImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productDiscount` varchar(255) DEFAULT NULL,
  `brandId` int(11) unsigned zerofill DEFAULT NULL,
  `typeId` int(11) unsigned zerofill DEFAULT NULL,
  `sortId` int(11) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`productId`),
  KEY `brandId` (`brandId`),
  KEY `typeId` (`typeId`),
  KEY `sortId` (`sortId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`brandId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`typeId`) REFERENCES `types` (`typeId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`sortId`) REFERENCES `sorts` (`sortId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `products`
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES ('1', 'SK-II 护肤面膜6片 面膜 前男友面膜 保湿', '更多的Pitera呵护，多方位密集浸浴护肤，帮助肌肤幼嫩细致，更富弹性', '740', '11', '11', '四季', '男/女', '1', '2-3-4-5', null, '1', '1', '2'), ('2', 'SK-II 唯白晶焕润透修护面膜6片 面膜 亮肤', '深度保养焕白面膜贴，晒后修护急救，提亮肤色。', '780', '20', '11', '四季', '男/女', '6', '7-8-9', null, '1', '1', '2'), ('3', 'SK-II 活肤紧颜双面膜6片 面膜 紧致', '3D剪裁面膜贴，提拉紧致，提升脸部轮廓，补水保湿，肌肤饱满有弹性。', '1070', '20', '11', '四季', '男/女', '10', '11-12', null, '1', '1', '2'), ('4', 'SK-II 护肤面膜10片 面膜 前男友面膜 保湿', ' 前男友面膜，贵妇爱用护肤精华贴，补水保湿，享受spa般奢宠。', '1060', '22', '11', '四季', '男/女', '13', '14-15-16', null, '1', '1', '2'), ('5', '深层补水保湿精油面膜 梵高限量版 盛开的杏花24片', '【梵高《盛开的杏花》限量版】无限回购款巨补水面膜，富含阿芙当家精油，层层锁住水分养分。狠狠补水，保湿嫩肤。学生白领妈妈挚爱款~', '199', '20', '11', '四季', '男/女', '17', '18-19', null, '2', '1', '3'), ('6', '深层巨补水保湿嫩肤精油面膜 12片 bad girl限量版 精油保湿 细嫩 提亮', '无限回购款补水面膜，含阿芙当家精油，层层锁住水分养分。狠狠补水，保湿嫩肤。白领学生妈妈都挚爱~', '99', '20', '11', '四季', '男/女', '20', '21-22', null, '2', '1', '3'), ('7', '深层补水保湿精油面膜 梵高限量版 盛开的杏花24片', '【梵高《盛开的杏花》限量版】无限回购款巨补水面膜，富含阿芙当家精油，层层锁住水分养分。狠狠补水，保湿嫩肤。学生白领妈妈挚爱款~', '199', '20', '11', '四季', '男/女', '17', '18-19', null, '2', '1', '3'), ('8', 'SK-II 日间护肤精华喷雾50ml 喷雾 补水 保湿', '神仙水精华喷雾，日间补水保湿，舒缓空调肌肤，随时随地唤醒晶莹剔透。', '490', '11', '11', '四季', '男/女', '23', '24-25', null, '1', '2', '14'), ('9', '百雀羚 水嫩精纯明星活肤水 爽肤水100ml 爽肤水', '自然保湿，滋肌润颜、柔润爽肤', '120', '20', '12', '四季', '男/女', '26', '27-28-29-30-31', null, '3', '2', '14'), ('10', '百雀羚 水嫩倍现补水补湿双重套装 面部精华 补水 喷雾', '不是所有爽肤水都是精华水，质地柔滑浓稠，一抹好吸收，快速补水润肤', '132', '20', '12', '四季', '男/女', '32', '33', null, '3', '2', '14'), ('11', '百雀羚 小雀幸天使草滋润下午茶咕噜水100ml 修护 紧致 爽肤水', '多重无刺激保湿因子，高分子透明质酸钠，天然海藻糖提取物，4无添加（ 无色素、无酒精、无矿物油、无硅油），蕴含天使草根部提取精萃', '168', '20', '12', '四季', '男/女', '34', '35-36', null, '3', '2', '14'), ('12', '百雀羚 三生花玲珑玉润清滢醒肤水100ml 爽肤水 补水', '蕴含珍贵草本精华，清爽质地，为肌肤注入水润养分，滋润肌肤同时二次深度清洁；平滑舒缓肌肤，提升肌肤对后续护肤品的吸收力。', '151', '20', '12', '四季', '男/女', '37', '38', null, '3', '2', '14'), ('13', '百雀羚 三生花青春紧弹活颜美容液100ml 爽肤水', '水润保湿，使肌肤柔软，光滑。', '161', '20', '12', '四季', '男/女', '39', '40-41', null, '3', '2', '14'), ('14', '曼秀雷敦 新碧双重保湿水感防晒露 SPF50+ PA++++ 80g', '水润美白，触感竟如化妆水般舒服，无油光超清爽', '69', '10', '12', '四季', '男/女', '42', '43', null, '5', '3', '7'), ('15', '曼秀雷敦 新碧双重保湿水盈防晒乳50g', '水润防晒，抗击阳光还能增加一层保湿，做水润少女', '68', '10', '12', '四季', '男/女', '44', '45', null, '5', '3', '7'), ('16', '曼秀雷敦 新碧水薄清爽防晒露 80g', '清爽防晒，全面阻隔紫外线，让肌肤穿上雪纺防晒衣', '48', '10', '12', '四季', '男/女', '46', '47', null, '5', '3', '7'), ('17', '曼秀雷敦 新碧水感防晒露 100ml', '为肌肤注入水润防晒保护，具有优越紫外线隔离效果及耐水性，不管太阳多大都不怕', '56', '10', '12', '四季', '男/女', '48', '49', null, '5', '3', '7'), ('18', '曼秀雷敦 新碧水薄嫩肤防晒乳液 SPF25 PA++ 80g', '敏感肌肤的防晒霜，深层锁水，让皮肤稳定度过不安定的日子', '56', '10', '12', '四季', '男/女', '50', '51', null, '5', '3', '7'), ('19', '曼秀雷敦 新碧轻透防晒水凝乳 50g', '无存在感的高倍防晒，让光老化远离你', '64', '10', '12', '四季', '男/女', '52', '53', null, '5', '3', '7'), ('20', '薇欧薇VOV莹彩亮泽唇膏 4# SPF8 奶油粉色 3.5g 丝绒 雾面 口红 显白 颜色正 滋润保湿', '富含60%的精华成分，使你双唇水润饱满，平滑而富有弹性，细腻柔滑，唇的第二层肌肤。', '128', '12', '30', '四季', '女', '54', '55', null, '6', '4', '10'), ('21', '薇欧薇VOV至臻丝绒唇膏S04 胭脂红3.5g 丝绒 咬唇妆 雾面 学生妆 口红', '保湿丰润，一抹持久炫色，无惧秋冬干燥。', '99', '12', '30', '四季', '女', '56', '57', null, '6', '4', '10'), ('22', '薇欧薇VOV莹彩亮泽唇膏 10# SPF8 摩洛哥红 3.5g 丝绒 雾面 口红 显白 颜色正 中国红 滋润保湿', '富含60%的精华成分，使你双唇水润饱满，平滑而富有弹性，细腻柔滑，唇的第二层肌肤。', '128', '12', '30', '四季', '女', '58', '59', null, '6', '4', '10'), ('23', '薇欧薇VOV盈润护唇膏 2.5g 滋润 修复 保湿', '一抹，即刻水润滋养，4种功效，双重滋润。', '28', '12', '30', '四季', '女', '60', '61-62', null, '6', '4', '10'), ('24', '薇欧薇VOV丝滑唇膏642# 冰点橙 3.5g 哑光 雾面 口红 明星同款', '挑逗你的双唇，色彩纯正，淡化唇纹，唇膏和口红的双重设计，补充水分。', '118', '12', '30', '四季', '女', '63', '64', null, '6', '4', '10'), ('25', '薇欧薇VOV丝滑唇膏641# 桃红色 3.5g 哑光 雾面 口红 颜色正', '挑逗你的双唇，色彩纯正，淡化唇纹，唇膏和口红的双重设计，补充水分。', '118', '12', '30', '四季', '女', '65', '66', null, '6', '4', '10'), ('26', '百雀羚 肌初赋活抚纹精华液30ml 面部精华 紧致 淡纹', '深专为东方女性研制，浓缩灵芝、人参精粹深入肌底，由内而外深度改善干纹细纹，优化面部线条。', '245', '12', '30', '四季', '女', '67', '68-69', null, '3', '5', '12'), ('27', '百雀羚 三生花玲珑玉润菁纯精华液30ml 面部精华 补水 精华', '天然草本精华，质地柔滑。给予肌肤密集润养，保湿成分润透肌肤，补水保湿，嫩滑细致。', '180', '12', '30', '四季', '女', '70', '71-72-73-74-75', null, '3', '5', '12'), ('28', '百雀羚 水感透白润养亮肤套装 面部精华 精华液 去角质', '持美白特证，美白精华渗入肌底，淡化色斑，补水提亮，肌肤由内而外白呈现白里透红自然粉嫩状态。', '199', '12', '30', '四季', '女', '76', '77-78-79', null, '3', '5', '12'), ('29', '百雀羚 水嫩精纯肌底精华液30ml 面部精华 补水保湿 滋润', '平衡控油，水嫩亮白', '138', '12', '30', '四季', '女', '80', '81', null, '3', '5', '12'), ('30', '百雀羚 水能量修护治愈精华套装 面部精华', '蕴含灵芝、丹参等珍贵草本精华，给予肌肤醇厚营养，紧致抗皱，焕颜淡纹。', '298', '12', '30', '四季', '女', '82', '83', null, '3', '5', '12'), ('31', '百雀羚 三生花玲珑玉润滋肌净颜套装 面部精华 精华 卸妆', '清新之始，打开水分吸收通道，让肌肤饱含养分减少水分流失，一步一步走向水灵。', '284', '12', '30', '四季', '女', '84', '85-86-87-88', null, '3', '5', '12'), ('32', 'SK-II 小灯泡甄选护肤套装 小灯泡 护肤套装 面部精华 亮肤', '断货王小灯泡，提亮肤色，焕发光泽，淡斑亮白，打造曜白上镜脸。', '1040', '12', '30', '四季', '女', '89', '90-91', null, '1', '5', '12'), ('33', 'SK-II “神仙水”精巧护肤臻选礼盒 神仙水 护肤套装 面部精华 保湿', '神仙水入门便携旅行装，面部护肤精华露，补水保湿细滑，肌肤愈渐晶莹剔透。', '590', '12', '30', '四季', '女', '92', '93-94', null, '1', '5', '12');
COMMIT;

-- ----------------------------
--  Table structure for `sorts`
-- ----------------------------
DROP TABLE IF EXISTS `sorts`;
CREATE TABLE `sorts` (
  `sortId` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `sortName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sortIntro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `typeId` int(10) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`sortId`),
  KEY `typeId` (`typeId`),
  CONSTRAINT `sorts_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `types` (`typeId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `sorts`
-- ----------------------------
BEGIN;
INSERT INTO `sorts` VALUES ('1', '抗氧化', null, '1'), ('2', '保湿', null, '1'), ('3', '滋润', null, '1'), ('4', '油性肤质', null, '2'), ('5', '中性肤质', null, '2'), ('6', '干性皮肤', null, '2'), ('7', '保湿', null, '3'), ('8', '补水', null, '3'), ('9', '美白', null, '3'), ('10', '均码', null, '4'), ('11', '祛痘', null, '5'), ('12', '美白', null, '5'), ('13', '保湿', null, '5'), ('14', '所有皮肤', null, '2');
COMMIT;

-- ----------------------------
--  Table structure for `types`
-- ----------------------------
DROP TABLE IF EXISTS `types`;
CREATE TABLE `types` (
  `typeId` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `typeIntro` varchar(255) DEFAULT NULL,
  `brandList` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`typeId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `types`
-- ----------------------------
BEGIN;
INSERT INTO `types` VALUES ('1', '面膜', null, '1-2-3'), ('2', '化妆水', null, '1-2-3-4'), ('3', '防晒隔离', null, '2-3-5'), ('4', '唇膏', null, '2-6'), ('5', '精华', null, '1-2-3');
COMMIT;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `userTel` varchar(255) DEFAULT NULL,
  `userPwd` varchar(255) DEFAULT NULL,
  `userMail` varchar(255) DEFAULT NULL,
  `userBirth` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', 'wry', '15527508925', '0000', '593110501@qq.com', '1995.10.03');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
