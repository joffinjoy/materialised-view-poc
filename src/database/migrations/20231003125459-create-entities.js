'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('entities', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			entity_type_id: {
				type: Sequelize.INTEGER,
			},
			value: {
				type: Sequelize.STRING,
			},
			label: {
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.STRING,
				defaultValue: 'ACTIVE',
			},
			type: {
				type: Sequelize.STRING,
			},
			allow_custom_text: {
				type: Sequelize.BOOLEAN,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			created_by: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			updated_by: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			deleted_at: {
				type: Sequelize.DATE,
			},
		});

		await queryInterface.addIndex('entities', ['value', 'entity_type_id'], {
			unique: true,
			name: 'unique_entities_value',
			where: {
				deleted_at: null,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('entities');
	},
};
