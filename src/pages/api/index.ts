import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
    id: number
    name?: string
}

// Fake users data
const users: User[] = [{ id: 1, name: "edson" }, { id: 2, name:'joão' }, { id: 3, name: 'maria' }]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    // Get data from your database
    res.status(200).json({users})
}