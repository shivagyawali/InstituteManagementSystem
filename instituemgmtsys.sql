-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 05, 2023 at 09:55 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `instituemgmtsys`
--

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

CREATE TABLE `Course` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fee` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `instituteId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Course`
--

INSERT INTO `Course` (`id`, `name`, `fee`, `status`, `created_at`, `instituteId`) VALUES
('13c2963a-a25b-4bdb-a953-f0568d255d85', 'Backend Development', '80000', 'active', '2022-09-16 09:58:04.250', '2459f9d4-5fae-4dc5-9349-889736eacb77'),
('764f5cec-2256-4eca-998e-c2966167940b', 'Sales Master Class', '90000', 'active', '2022-09-16 07:43:54.432', '2459f9d4-5fae-4dc5-9349-889736eacb77');

-- --------------------------------------------------------

--
-- Table structure for table `Discount`
--

CREATE TABLE `Discount` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `percent` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Discount`
--

INSERT INTO `Discount` (`id`, `discount_type`, `percent`, `created_at`) VALUES
('7ad415cd-22db-4390-9497-4b6a10380efa', 'Test2', '10', '2022-09-17 01:29:39.191'),
('c16699cf-d55b-4c11-8ae1-02ab102f466c', 'Test5', '20', '2022-09-17 01:29:51.573'),
('e34c0957-90e3-4b6f-ab62-66fcd882be5f', 'Test3', '15', '2022-09-17 01:29:44.617');

-- --------------------------------------------------------

--
-- Table structure for table `Fee`
--

CREATE TABLE `Fee` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phase` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `studentId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discountId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Fee`
--

INSERT INTO `Fee` (`id`, `phase`, `amount`, `status`, `created_at`, `studentId`, `discountId`) VALUES
('cc88c299-6136-4ff4-b62c-30f6229e0cfc', 'first', '100000', 'active', '2022-09-17 04:41:38.689', 'f5abe953-a3ff-4595-a633-95763b5ce770', '7ad415cd-22db-4390-9497-4b6a10380efa');

-- --------------------------------------------------------

--
-- Table structure for table `Institute`
--

CREATE TABLE `Institute` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userLoginId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Institute`
--

INSERT INTO `Institute` (`id`, `name`, `address`, `phone`, `pan`, `created_at`, `userLoginId`) VALUES
('2459f9d4-5fae-4dc5-9349-889736eacb77', 'TechTemple IT Solution', 'Butwal 10', '9865092811', '678968678', '2022-09-03 05:12:28.284', '467532f5-75b1-4422-a0af-d293d5d9b14e');

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

CREATE TABLE `Role` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Role`
--

INSERT INTO `Role` (`id`, `name`, `created_at`) VALUES
('502aadc5-3fcb-41e2-bb94-48969ec8240d', 'superadmin', '2022-09-03 05:07:51.644'),
('f79c504f-42ed-4990-abdd-cb3aa8943ff9', 'institute', '2022-09-03 05:07:40.558');

-- --------------------------------------------------------

--
-- Table structure for table `Staff`
--

CREATE TABLE `Staff` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qualification` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nagrita` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` datetime(3) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `instituteId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Staff`
--

INSERT INTO `Staff` (`id`, `name`, `gender`, `phone`, `address`, `salary`, `qualification`, `email`, `photo`, `nagrita`, `dob`, `created_at`, `instituteId`) VALUES
('6fe8b19f-c567-4d2f-9d49-3e963f82b582', 'Samrat Aryal', 'male', '9865092811', 'Butwal', '20000', NULL, NULL, '1663339615190doug_corbin225x225.jpeg', '1663339615193306948395_3345439319067558_4490104797484755386_n.jpeg', '2049-11-10 00:00:00.000', '2022-09-16 14:42:43.284', '2459f9d4-5fae-4dc5-9349-889736eacb77'),
('c14b7cc7-8d11-4b60-a02c-a79a513d5756', 'Hari Bhdur', 'male', '9865092812', 'Butwal , kalikanagar', '10000', NULL, NULL, '1663339927900thumb.jpeg', '1663339927900119216836_3120433621416899_6095806801660708478_n.jpeg', '2049-11-10 00:00:00.000', '2022-09-16 14:52:07.908', '2459f9d4-5fae-4dc5-9349-889736eacb77');

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

CREATE TABLE `Student` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qualification` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nagrita` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` datetime(3) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `instituteId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Student`
--

INSERT INTO `Student` (`id`, `name`, `gender`, `phone`, `address`, `batch`, `qualification`, `email`, `photo`, `nagrita`, `dob`, `created_at`, `instituteId`) VALUES
('f5abe953-a3ff-4595-a633-95763b5ce770', 'Deepika Dhakal', 'female', '9857028154', 'Devdaha', '2069', NULL, 'deep@gmail.com', '1663344203201thumb.jpeg', '1663344203201comgReg_Shrestha.jpg', '2055-11-06 18:15:00.000', '2022-09-16 15:59:26.289', '2459f9d4-5fae-4dc5-9349-889736eacb77');

-- --------------------------------------------------------

--
-- Table structure for table `Teacher`
--

CREATE TABLE `Teacher` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qualification` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nagrita` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` datetime(3) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `instituteId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Teacher`
--

INSERT INTO `Teacher` (`id`, `name`, `gender`, `phone`, `address`, `salary`, `qualification`, `email`, `photo`, `nagrita`, `dob`, `created_at`, `instituteId`) VALUES
('16fd8860-9907-4af5-91c3-b0b785002d4f', 'Sandeep Gyawali', 'male', '9865092811', 'Butwal', 'addresss', 'master', 'shiva@gmail.com', '1663323537254driver.jpg', '1663323537256bluebook.png', '2054-11-12 00:00:00.000', '2022-09-16 10:02:17.162', '2459f9d4-5fae-4dc5-9349-889736eacb77');

-- --------------------------------------------------------

--
-- Table structure for table `UserLogin`
--

CREATE TABLE `UserLogin` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `roleId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `UserLogin`
--

INSERT INTO `UserLogin` (`id`, `username`, `password`, `last_login`, `created_at`, `roleId`) VALUES
('467532f5-75b1-4422-a0af-d293d5d9b14e', 'techtemple', '$2b$10$PeaKZRZ9xwDWco75lN/Rie/9TWmO5mFwRph3WuTlDykjUtjRgCxE6', '2022-09-03 05:08:48.215', '2022-09-03 05:08:48.215', 'f79c504f-42ed-4990-abdd-cb3aa8943ff9'),
('f42f450a-e144-47e9-8671-d52a9265f5a8', 'admin', '$2b$10$n7xg9jAFAZmh0Jbvyz3a6.wpKw1mfgZYWp37Wm..MQNwiYgrGatWe', '2022-09-03 05:09:32.985', '2022-09-03 05:09:32.985', '502aadc5-3fcb-41e2-bb94-48969ec8240d');

-- --------------------------------------------------------

--
-- Table structure for table `_CourseToStudent`
--

CREATE TABLE `_CourseToStudent` (
  `A` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_CourseToStudent`
--

INSERT INTO `_CourseToStudent` (`A`, `B`) VALUES
('13c2963a-a25b-4bdb-a953-f0568d255d85', 'f5abe953-a3ff-4595-a633-95763b5ce770');

-- --------------------------------------------------------

--
-- Table structure for table `_CourseToTeacher`
--

CREATE TABLE `_CourseToTeacher` (
  `A` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_CourseToTeacher`
--

INSERT INTO `_CourseToTeacher` (`A`, `B`) VALUES
('13c2963a-a25b-4bdb-a953-f0568d255d85', '16fd8860-9907-4af5-91c3-b0b785002d4f'),
('764f5cec-2256-4eca-998e-c2966167940b', '16fd8860-9907-4af5-91c3-b0b785002d4f');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('03412c07-9e07-4172-b38c-7c66e7cb344d', '25d9328c7fc33a2cac58122a4e34a46a97c3bb3583e68194f4b0404d9c6955ba', '2022-09-16 15:39:24.109', '20220916153924_init', NULL, NULL, '2022-09-16 15:39:24.061', 1),
('2e3acb03-82eb-46db-b04a-ce96b4667b28', '7838a36ea219ebbd1bae267bfdf480ea00fb5460e7a4cdc219644583931116f5', '2022-09-16 14:30:33.431', '20220916143033_init', NULL, NULL, '2022-09-16 14:30:33.353', 1),
('4cf95c60-42bd-4c76-b725-d8b1cc73b96e', 'b1342026767dffd811bcb36735c60db4e6eaf20350063fcca33d644592fa28e6', '2022-09-16 07:17:56.821', '20220916071756_init', NULL, NULL, '2022-09-16 07:17:56.782', 1),
('7ad9a8bd-0719-4079-b321-37d6e5c80eda', 'c7ed41bc63e1b1fc21a350d9ddd80811dd19d73495f3278c9251b2d19fe2460b', '2022-09-05 05:59:54.420', '20220905055953_init', NULL, NULL, '2022-09-05 05:59:54.004', 1),
('7f26f996-4f4e-4f10-803d-2896843d9ef1', 'cf23b439a4f4395cd78584662a2e3d1a563ded3e3eaa41de43d1d3a9ef15c187', '2022-09-17 02:43:07.801', '20220917024307_init', NULL, NULL, '2022-09-17 02:43:07.767', 1),
('843baaf3-9690-4a55-b6c3-899fe6a19042', '60d5a8c4dde4d2b5043d0d6bf79fb7eb683e9a9c028cec036350ddd9eecb5ef6', '2022-09-16 15:38:39.537', '20220916153839_init', NULL, NULL, '2022-09-16 15:38:39.508', 1),
('8faa4d2f-145e-4cf3-b73d-99b57f59cc8d', 'ed55173e6f8792779f84019b3ce8a1b00f78255bf45f16919495306af35bb362', '2022-09-05 06:31:50.128', '20220905063150_init', NULL, NULL, '2022-09-05 06:31:50.070', 1),
('9c744a81-2f7c-41dd-90f3-81a94f8c3d2c', 'f8d7aa7f77828bdbb1b1e09ecfa67ea5bac264f9f24444a38af052baae4c9a75', '2022-09-16 14:37:51.310', '20220916143751_init', NULL, NULL, '2022-09-16 14:37:51.272', 1),
('bfdf5688-14f8-47c4-9d9b-43ddf9465f2c', '98e582a2594db9a7c27f730996876142b2fa7005c6837936bec56024e7099396', '2022-09-16 04:00:33.298', '20220916040033_init', NULL, NULL, '2022-09-16 04:00:33.106', 1),
('d06fbc81-eb3a-4cee-8270-30c59ab7c4ad', '91042c095402112d476a2df67e8364cc63889e7607c8c6e962dec4a302b8aa0d', '2022-09-17 01:23:05.937', '20220917012305_init', NULL, NULL, '2022-09-17 01:23:05.833', 1),
('f6dbfe43-b067-49b3-a3ee-5936ae9de6b4', 'd1f373809f0aca3800d48ec85315cfe115d6912b9b0e8fdfddedc029446354e3', '2022-09-16 15:38:04.709', '20220916153804_init', NULL, NULL, '2022-09-16 15:38:04.360', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Course_instituteId_fkey` (`instituteId`);

--
-- Indexes for table `Discount`
--
ALTER TABLE `Discount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Fee`
--
ALTER TABLE `Fee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Fee_studentId_fkey` (`studentId`),
  ADD KEY `Fee_discountId_fkey` (`discountId`);

--
-- Indexes for table `Institute`
--
ALTER TABLE `Institute`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Institute_userLoginId_key` (`userLoginId`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Role_name_key` (`name`);

--
-- Indexes for table `Staff`
--
ALTER TABLE `Staff`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Staff_instituteId_fkey` (`instituteId`);

--
-- Indexes for table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Student_instituteId_fkey` (`instituteId`);

--
-- Indexes for table `Teacher`
--
ALTER TABLE `Teacher`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Teacher_instituteId_fkey` (`instituteId`);

--
-- Indexes for table `UserLogin`
--
ALTER TABLE `UserLogin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserLogin_roleId_fkey` (`roleId`);

--
-- Indexes for table `_CourseToStudent`
--
ALTER TABLE `_CourseToStudent`
  ADD UNIQUE KEY `_CourseToStudent_AB_unique` (`A`,`B`),
  ADD KEY `_CourseToStudent_B_index` (`B`);

--
-- Indexes for table `_CourseToTeacher`
--
ALTER TABLE `_CourseToTeacher`
  ADD UNIQUE KEY `_CourseToTeacher_AB_unique` (`A`,`B`),
  ADD KEY `_CourseToTeacher_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Course`
--
ALTER TABLE `Course`
  ADD CONSTRAINT `Course_instituteId_fkey` FOREIGN KEY (`instituteId`) REFERENCES `Institute` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Fee`
--
ALTER TABLE `Fee`
  ADD CONSTRAINT `Fee_discountId_fkey` FOREIGN KEY (`discountId`) REFERENCES `Discount` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Fee_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Institute`
--
ALTER TABLE `Institute`
  ADD CONSTRAINT `Institute_userLoginId_fkey` FOREIGN KEY (`userLoginId`) REFERENCES `UserLogin` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Staff`
--
ALTER TABLE `Staff`
  ADD CONSTRAINT `Staff_instituteId_fkey` FOREIGN KEY (`instituteId`) REFERENCES `Institute` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Student`
--
ALTER TABLE `Student`
  ADD CONSTRAINT `Student_instituteId_fkey` FOREIGN KEY (`instituteId`) REFERENCES `Institute` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Teacher`
--
ALTER TABLE `Teacher`
  ADD CONSTRAINT `Teacher_instituteId_fkey` FOREIGN KEY (`instituteId`) REFERENCES `Institute` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `UserLogin`
--
ALTER TABLE `UserLogin`
  ADD CONSTRAINT `UserLogin_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `_CourseToStudent`
--
ALTER TABLE `_CourseToStudent`
  ADD CONSTRAINT `_coursetostudent_ibfk_1` FOREIGN KEY (`A`) REFERENCES `Course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_coursetostudent_ibfk_2` FOREIGN KEY (`B`) REFERENCES `Student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_CourseToTeacher`
--
ALTER TABLE `_CourseToTeacher`
  ADD CONSTRAINT `_coursetoteacher_ibfk_1` FOREIGN KEY (`A`) REFERENCES `Course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_coursetoteacher_ibfk_2` FOREIGN KEY (`B`) REFERENCES `Teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
