import { NextApiRequest, NextApiResponse } from "@/node_modules/next/dist/shared/lib/utils";
import { NextResponse } from "@/node_modules/next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse){
    return NextResponse.json(
        {
            message: 'Welcome to my rest API',
            data: {
                startDate: '20/03/2024',
                portf: 'https://github.com/lpxsbr',
                mocks: '/api/mock'
            }
        }
    );
}
