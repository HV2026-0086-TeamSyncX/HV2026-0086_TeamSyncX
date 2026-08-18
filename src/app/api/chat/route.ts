import { NextRequest, NextResponse } from 'next/server';
import { executeDocumentRAG, executeUniversalChat } from '@/lib/geminiClient';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { query, documentContext, customApiKey, history } = await req.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { success: false, error: 'A valid query string is required.' },
        { status: 400 }
      );
    }

    if (documentContext && documentContext.name) {
      // Document-grounded RAG
      const { answer, citations, suggestions } = await executeDocumentRAG(
        query,
        documentContext,
        customApiKey
      );

      return NextResponse.json({
        success: true,
        answer,
        citations,
        suggestions
      });
    }

    // Universal AI Chat
    const { answer, suggestions } = await executeUniversalChat(
      query,
      customApiKey,
      history
    );

    return NextResponse.json({
      success: true,
      answer,
      suggestions
    });
  } catch (error: any) {
    console.error('Error in /api/chat route:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to process chat query' },
      { status: 500 }
    );
  }
}
