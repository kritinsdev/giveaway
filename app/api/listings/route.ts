import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();
    const {
        title,
        imageSrc,
        location,
        description,
        category,
        brand,
        width,
        height,
        depth
    } = body;

    // Object.keys(body).forEach((value: any) => {
    //     if (!body[value]) {
    //         NextResponse.error();
    //     }
    // });

    const listing = await prisma.listing.create({
        data: {
            title,
            imageSrc,
            locationValue: location.value,
            description,
            category,
            brand,
            width: parseInt(width, 10),
            height: parseInt(height, 10),
            depth: parseInt(depth, 10),
            userId: currentUser.id
        }
    });

    return NextResponse.json(listing)
}