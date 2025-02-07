import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('jwt');
    const publicPaths = ['/login'];

    if (token) {
        return NextResponse.next();
    }

    if (!token && !publicPaths.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

// Specify the paths where the middleware should run
export const config = {
    matcher: [
        '/dashboard',
    ],
};