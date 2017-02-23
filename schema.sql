-- Database: dms-vault

CREATE DATABASE docinventory;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(128) NOT NULL DEFAULT 'NULL',
  `firstName` VARCHAR(128) NOT NULL DEFAULT 'NULL',
  `lastName` VARCHAR(128) NOT NULL DEFAULT 'NULL',
  `email` VARCHAR(128) NOT NULL DEFAULT 'NULL',
  `password` VARCHAR(128) NOT NULL DEFAULT 'NULL',
  `roleId` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Roles'
-- 
-- ---

DROP TABLE IF EXISTS `Roles`;
		
CREATE TABLE `Roles` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR(128) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Categories'
-- 
-- ---

DROP TABLE IF EXISTS `Categories`;
		
CREATE TABLE `Categories` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR(128) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Documents'
-- 
-- ---

DROP TABLE IF EXISTS `Documents`;
		
CREATE TABLE `Documents` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR(256) NOT NULL DEFAULT 'NULL',
  `content` MEDIUMTEXT NOT NULL DEFAULT 'NULL',
  `access` VARCHAR(128) NOT NULL DEFAULT 'NULL',
  `userId` INTEGER NOT NULL DEFAULT NULL,
  `categoryId` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Users` ADD FOREIGN KEY (roleId) REFERENCES `Roles` (`id`);
ALTER TABLE `Documents` ADD FOREIGN KEY (userId) REFERENCES `Users` (`id`);
ALTER TABLE `Documents` ADD FOREIGN KEY (categoryId) REFERENCES `Categories` (`id`);
