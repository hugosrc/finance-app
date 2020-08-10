import { uuid } from 'uuidv4'

export class Income {
   
  public readonly id: string;

  public description: string;
  public value: number;
  public month: string; // e.g Fev-2020

  constructor(props: Omit<Income, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}