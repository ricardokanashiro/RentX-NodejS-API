import { Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

class User {
    @PrimaryColumn()
    name: string;

    @Column()
    username: string;

    @Column()
    id: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    driver_license: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    created_at: Date;

    costructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };
