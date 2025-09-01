// app/api/todos/route.ts
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(todos);
  } catch (err) {
    return NextResponse.json({ error: 'Could not fetch todos' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const title = (body.title || '').toString().trim();
    if (!title) {
      return NextResponse.json({ error: 'Missing title' }, { status: 400 });
    }
    const todo = await prisma.todo.create({
      data: { title },
    });
    return NextResponse.json(todo, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Could not create todo' }, { status: 500 });
  }
}
