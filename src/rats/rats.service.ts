import { Injectable } from '@nestjs/common';
import { Rats } from 'src/rat/interface/rat.interface';
@Injectable()
export class RatsService {
    private readonly cats: Rats[] = [];
    create(cat: Rats) {
        this.cats.push(cat);
    }
    findAll():Rats[]{
        return this.cats;
    }
}
