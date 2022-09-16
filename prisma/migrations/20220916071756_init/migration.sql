-- AlterTable
ALTER TABLE `Course` MODIFY `fee` VARCHAR(191) NULL,
    MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'active';
