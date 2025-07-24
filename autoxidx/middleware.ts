import { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";

export { middleware };

export const config = {
    matcher : [
        '/session'
    ],
    pages:{
        signIn : 'api/auth/signin'
    }
}