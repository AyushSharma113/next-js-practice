import connectDb from "@/lib/db";
import User from "@/modal/user.modal";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { hash } from "crypto";


//status code-
// 200-300   --- success
// create= 201

//frontend error == 400-499
//backend error == 500



export async function POST(req: NextRequest){
    try {
        const {name, email, password} = await req.json()
        await connectDb()

        const existUser = await User.find({email})

        if(!existUser){
            return NextResponse.json(
                {'message': "user already exist"},
                {status: 400}
            )
        }


        if(password.length<6){
                return NextResponse.json(
                {message:"password must be at least 6 characters!"},
                {status:400}
            )
        }

        const hashedPassword = await bcrypt.hash(password,10)   

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        
        
        return NextResponse.json(
            {
                user,
                message:"just checking it is working or not"
            },
        )
    } catch (error) {
        console.log(error)
    }
}

