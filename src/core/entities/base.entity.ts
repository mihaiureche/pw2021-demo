import { BaseDTO } from "@infrastructure/dtos/base.dto";

export interface IBaseEntity {
    id: number;
}

export abstract class BaseEntity implements IBaseEntity {
    public id: number;

    constructor() { 
        this.id = Math.random();
    }

    public setEntityFromDTO(baseDTO: BaseDTO): void {
        this.id = baseDTO.id;
    }
}