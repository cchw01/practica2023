import mongoose from 'mongoose';
const { model, Schema } = mongoose;

import {env} from '../env';
import { Photo } from '../models/photo.model';


const photoSchema = new Schema<Photo>(
    {
        id: { type: String, required: true },
        photoLink: { type: String, required: true },
        description: { type: String}


    },
    {
        collection:env.DB_NAME
    }

)

const PhotoDb= model<Photo>('Photo',photoSchema);

export {PhotoDb};

