import mongoose,{Schema,Document} from "mongoose";

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAuthor:boolean;
    isAdmin:boolean;
}

const UserSchema:Schema<User>=new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please use a valid email address"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    verifyCode:{
        type:String,
        required:[true,"Verify code is required"],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Verify code expiry is required"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isAuthor:{
        type:Boolean,
        default:false
    }
})

export const User=mongoose.model<User>('User',UserSchema)



export interface Novel extends Document{
    title:string;
    description: string;
    author: mongoose.Schema.Types.ObjectId;
    genres: mongoose.Schema.Types.ObjectId[];
    coverImage:string;
    publishedDate:Date;
    numberOfChapter:string;
    isCompleted:boolean;
}

const NovelSchema:Schema<Novel>=new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    genres: [{
        type: mongoose.Types.ObjectId,
        ref: 'Genre',
        required: true
    }],
    coverImage: {
        type: String,
        required: [true, "Cover image is required"]
    },
    publishedDate: {
        type: Date,
        default: Date.now
    },
    numberOfChapter:{
        type: String,
        required:[true,"Number of chapter required"]
    },
    isCompleted: {
        type: Boolean,
        default: false
    }

})

export const Novel=mongoose.model<Novel>('Novel',NovelSchema)



export interface Chapter extends Document {
    novel: mongoose.Schema.Types.ObjectId;
    title: string;
    content: string;
    publishedDate: Date;
    chapterNumber: number;
}

const ChapterSchema: Schema<Chapter> = new Schema({
    novel: {
        type: Schema.Types.ObjectId,
        ref: 'Novel',
        required: true
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    publishedDate: {
        type: Date,
        default: Date.now
    },
    chapterNumber: {
        type: Number,
        required: [true, "Chapter number is required"]
    }
});

export const Chapter = mongoose.model<Chapter>('Chapter', ChapterSchema);

export interface Comment extends Document {
    novel: mongoose.Schema.Types.ObjectId;
    chapter: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
    content: string;
    postedDate: Date;
}

const CommentSchema: Schema<Comment> = new Schema({
    novel: {
        type: Schema.Types.ObjectId,
        ref: 'Novel',
        required: true
    },
    chapter: {
        type: Schema.Types.ObjectId,
        ref: 'Chapter',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    postedDate: {
        type: Date,
        default: Date.now
    }
});

export const Comment = mongoose.model<Comment>('Comment', CommentSchema);


export interface Rating extends Document {
    novel: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
    score: number;
}

const RatingSchema: Schema<Rating> = new Schema({
    novel: {
        type: Schema.Types.ObjectId,
        ref: 'Novel',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    score: {
        type: Number,
        required: [true, "Score is required"],
        min: 1,
        max: 5
    }
});

export const Rating = mongoose.model<Rating>('Rating', RatingSchema);


export interface Genre extends Document {
    name: string;
}

const GenreSchema: Schema<Genre> = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true
    }
});

export const Genre = mongoose.model<Genre>('Genre', GenreSchema);
