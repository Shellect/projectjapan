import 'server-only'

import {cookies} from "next/headers";
import  {decrypt} from 'session';
import {redirect} from 'next/navigation';
import {cache} from 'react';
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const verifySession = cache(async () => {
    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie)

    if (!session?.userId) {
        redirect('/login')
    }

    return { isAuth: true, userId: session.userId }
})

export const getUser = cache(async () => {
    const session = await verifySession()
    if (!session) return null

    try {
        const data = await prisma.query.users.findMany({
            where: eq(users.id, session.userId),
            // Explicitly return the columns you need rather than the whole user object
            columns: {
                id: true,
                name: true,
                email: true,
            },
        })

        const user = data[0]

        return user
    } catch (error) {
        console.log('Failed to fetch user')
        return null
    }
})