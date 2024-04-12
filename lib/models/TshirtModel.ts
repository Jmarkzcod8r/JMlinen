import mongoose from 'mongoose'


const TshirtSchema = new mongoose.Schema(
    {
      firstName: { type: String, required: true },
      // To satify the unique:true of slug, we can use timestamp or uuid or the uniqueness of another property
      // like an email
    //   code: {type: String, required: true},
      lastName: { type: String, required: true },
      remarks: { type: String, required: false },
      size: { type: String, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },

    },
    {
      timestamps: true,
    }
  )

  const TshirtModel =
  mongoose.models.Tshirt || mongoose.model('Tshirt', TshirtSchema)

  export default TshirtModel


//The `?` make the property optional
// This is for TypeScript
export type Tshirt = {

    _id?: string
    firstName: string
    lastName: string
    remarks: string
    size: string
    height: number
    width: number
    // code?: string

}