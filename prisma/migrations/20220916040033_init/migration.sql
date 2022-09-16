/*
  Warnings:

  - You are about to drop the column `courseId` on the `Teacher` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Teacher` DROP FOREIGN KEY `Teacher_courseId_fkey`;

-- AlterTable
ALTER TABLE `Teacher` DROP COLUMN `courseId`;

-- CreateTable
CREATE TABLE `_CourseToTeacher` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CourseToTeacher_AB_unique`(`A`, `B`),
    INDEX `_CourseToTeacher_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CourseToTeacher` ADD FOREIGN KEY (`A`) REFERENCES `Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CourseToTeacher` ADD FOREIGN KEY (`B`) REFERENCES `Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
