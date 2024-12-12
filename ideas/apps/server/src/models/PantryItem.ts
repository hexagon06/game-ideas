import { Schema, model, Document, Types } from 'mongoose';

interface IPantryItem extends Document {
    name: string;
}

const PantryItemSchema = new Schema<IPantryItem>({
    name: {
        type: String,
        required: true,
    },
});

const PantryItem = model<IPantryItem>('PantryItem', PantryItemSchema);

export default PantryItem;
export { IPantryItem };
