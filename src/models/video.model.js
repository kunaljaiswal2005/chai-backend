import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema=new Schema(
    {
        videoFile:{
            type: String,
            required: True,

        },
        thumbnail:{
            type: String,
            required: True,

        },
        title:{
            type: String,
            required: True,

        },
        description:{
            type: String,
            required: True,

        },
        duration:{
            type: Number,
            required: True,

        },
        views:{
            type: Number,
            default: 0,
        },
        isPublished:{
            type: Boolean,
            default: False,
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref : "user"
        },
    },
    {timestamps:true}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)
