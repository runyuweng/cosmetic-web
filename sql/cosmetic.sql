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

 Date: 03/26/2018 17:06:42 PM
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `imgs`
-- ----------------------------
BEGIN;
INSERT INTO `imgs` VALUES ('1', null, '4979006620344-110.jpg'), ('2', null, '4979006620344-651.jpg'), ('3', null, '4979006620344-652.jpg'), ('4', null, '4979006620344-653.jpg'), ('5', null, '4979006620344-654.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `products`
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES ('1', 'SK-II 护肤面膜6片 面膜 前男友面膜 保湿', '更多的Pitera呵护，多方位密集浸浴护肤，帮助肌肤幼嫩细致，更富弹性', '740', '11', '11', '四季', '男/女', '1', '2-3-4-5', null, '1', '1', '2');
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `sorts`
-- ----------------------------
BEGIN;
INSERT INTO `sorts` VALUES ('1', '抗氧化', null, '1'), ('2', '保湿', null, '1'), ('3', '滋润', null, '1'), ('4', '油性肤质', null, '2'), ('5', '中性肤质', null, '2'), ('6', '干性皮肤', null, '2'), ('7', '保湿', null, '3'), ('8', '补水', null, '3'), ('9', '美白', null, '3'), ('10', '均码', null, '4'), ('11', '祛痘', null, '5'), ('12', '美白', null, '5'), ('13', '保湿', null, '5');
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
