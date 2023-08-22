-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema amorpeludodb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema amorpeludodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `amorpeludodb` DEFAULT CHARACTER SET utf8 ;
USE `amorpeludodb` ;

-- -----------------------------------------------------
-- Table `amorpeludodb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `amorpeludodb`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tittle` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `img1` VARCHAR(500) NOT NULL,
  `img2` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `amorpeludodb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `amorpeludodb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `confirmarContraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `amorpeludodb`.`ordendecompra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `amorpeludodb`.`ordendecompra` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `productos_id` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`, `productos_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
