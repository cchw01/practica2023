//import { ObjectId } from "mongoose";
import { Offer } from "../models/offer.model";
import { OfferDB } from "../schemas/offer.schema";

export async function getAllOffers(): Promise<Error | Offer[]> {

    try {
        const inventoryOffers = await OfferDB.find();
        return inventoryOffers;
    } catch (ex: any) {
        return ex;
    }
}

export async function getOfferById(offerId: string): Promise<Error | Offer | null> {
    
    try {
        const offerById = await OfferDB.findById(offerId);
        return offerById;
    } catch (ex: any) {
        return ex;
    }
}

export async function postOffer(offer: Partial<Offer>): Promise<Error | Offer>{
    if (!offer || !offer.discountPercent || !offer.startDate || !offer.endDate) {
        console.log("Error from first condition");
        return Error("The parameters given are not valid!");
    }
    try {
        const exists = await OfferDB.findOne({ discountPercent: offer.discountPercent, productList: offer.productList,
        startDate: offer.startDate, endDate: offer.endDate });
        if (exists) {
            console.log("Error from second condition");
            return Error("The item added to the database already exists!");
        }
    } catch (ex: any) {        
        return ex;
    }
    const NewOffer = new OfferDB({
        discountPercent: offer.discountPercent,
        productList: offer.productList,
        startDate: offer.startDate,
        endDate: offer.endDate
    })
    NewOffer.save();
    return NewOffer;
}

export async function updateOffer(offerId: string, NewOffer: Partial<Offer>): Promise<Error | Offer | string | null> {

    if (NewOffer.discountPercent || NewOffer.productList || NewOffer.startDate || NewOffer.endDate) {
      try {
        const findOffer = await OfferDB.findByIdAndUpdate(
          { _id: offerId },
          {
            discountPercent: NewOffer.discountPercent,
            productList: NewOffer.productList,
            startDate: NewOffer.startDate,
            endDate: NewOffer.endDate
          }
        );
        if (findOffer == null)
            return "Could not find offer!";
        console.log("updated");
        const offerById = await OfferDB.findById(NewOffer._id);
        return offerById;
      } catch (ex: any) {
        return ex;
      }
    } else {
      return "No attributes found!";
    }
}

export async function deleteOffer(offerId: string): Promise<string | Error> {
    try {
        const existsOfferById = await OfferDB.findByIdAndDelete(offerId);
        if(!existsOfferById){
            return Error("Item not found");
        }
        return "Deleted offer";
    } catch (ex: any) {
        return ex;
    }
}