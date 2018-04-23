import {Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table({ tableName: 'list' })
export class ListEntity extends Model<ListEntity> {

    constructor(values?: any, options?: any) {
        super(values, options);
    }

    @PrimaryKey
    @Column
    id: number;

    @Column
    @Column(DataType.TEXT)
    name: string;

    @Column
    @Column(DataType.TEXT)
    url: string;

    @CreatedAt
    @Column(DataType.DATE)
    created_date: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updated_date: Date;
}
