-- AlterTable
ALTER TABLE `orders` ADD COLUMN `users_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_users_id_fkey` FOREIGN KEY (`users_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
