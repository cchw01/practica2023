import { OrderDB } from "../schemas/order.schema";
import { Order } from "../models/order.model";

export async function postOrder(order: Order): Promise<Error | Order> {
  if (
    !order ||
    !order.user||
    !order.address ||
    !order.productList ||
    !order.deliveryType ||
    !order.totalPrice ||
    !order.userNotes  ||
    !order.date ||
    !order.orderStatus
  ) {
    console.log(order);
    return Error("The parameters given are not valid!");
  }
  const newOrder = new OrderDB({
      user: order.user,
      address: order.address,
      productList: order.productList,
      deliveryType: order.deliveryType,
      totalPrice: order. totalPrice,
      userNotes: order.userNotes,
      date: order.date,
      orderStatus: order.orderStatus
  });

  try {
    const orderExists = await OrderDB.findOne(order);
    if (orderExists) {
      return Error("The order added to the database already exists!");
    }
  } catch (ex: any) {
    return ex;
  }

  try{
    await newOrder.save();
  } catch (ex: any) {
    return ex;
  }
  
  return newOrder;
}

export async function getOrder(_id: string): Promise<Error | Order | null> {
  if (!_id || typeof _id !== "string") {
    return Error("Invalid parameters!");
  }
  try {
    const order = await OrderDB.findOne<Order>({ _id: _id });
    return order;
  } catch (ex: any) {
    return ex;
  }
}

export async function getOrders(): Promise<Error | Order[]> {

  try {
    const photos = await OrderDB.find<Order>({});
    return photos;
  } catch (ex: any) {
    return Error(ex.message);
  }
}


export async function deleteOrder(_id: string) {
  if (!_id || typeof _id !== "string") {
    return Error("invalid params");
  }
  try {
    const order = await OrderDB.findOneAndDelete({ _id: _id });
    return order;
  } catch (ex: any) {
    return ex;
  }
}

// export async function updateOrder(
//   newOrder: Partial<Order>
// ): Promise<Error | Order | undefined> {
//   if (!newOrder || typeof newOrder !== "object") {
//     return Error("Invalid parameters!");
//   }

//   try {
//     var updateResponse = await OrderDB.findOneAndUpdate<Order>(
//       { _id: newOrder._id },
//       {
//         user: newOrder.user,
//         address: newOrder.address,
//         productList: newOrder.productList,
//         deliveryType: newOrder.deliveryType,
//         totalPrice: newOrder.totalPrice,
//         userNotes: newOrder.userNotes,
//         date: newOrder.date,
//         orderStatus: newOrder.orderStatus
//       }
//     );

//     if (updateResponse == null) {
//       return Error("Invalid");
//     }
//   } catch (ex: any) {
//     return ex;
//   }

//   return undefined;
// }



export async function updateOrder(newOrder:Partial<Order>): Promise<Error | Order | undefined> {
  if (!newOrder || typeof newOrder !== "object") {
    return Error("invalid params");
  }

  try {
      var updateResponse = await OrderDB.findOneAndUpdate<Order>({
        _id:newOrder._id
      }, 
      newOrder);
      
      if(updateResponse==null){
        return Error("Invalid");
      }

  } catch (ex: any) {
    return ex;
  }

  return undefined;
}