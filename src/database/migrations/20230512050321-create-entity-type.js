'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('entity_types', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
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
			allow_filtering: {
				type: Sequelize.BOOLEAN,
			},
			data_type: {
				type: Sequelize.STRING,
			},
			org_id: {
				type: Sequelize.INTEGER,
			},
			parent_id: {
				type: Sequelize.INTEGER,
			},
			has_entities: {
				type: Sequelize.BOOLEAN,
			},
			model_names: {
				type: Sequelize.ARRAY(Sequelize.STRING),
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

		await queryInterface.addIndex('entity_types', ['value', 'org_id'], {
			unique: true,
			name: 'unique_value',
			where: {
				deleted_at: null,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('entity_types');
	},
};
