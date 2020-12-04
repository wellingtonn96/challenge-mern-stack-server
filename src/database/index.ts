// import { connect } from 'mongoose';

// export function createConnection(): void {
//   try {
//     connect('mongodb://localhost:27017/customersLocation', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// createConnection();

import { connect } from 'mongoose';

const connection = process.env.MONGODB_URI;

export function createConnection(): void {
  try {
    connect(connection as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
}

createConnection();
