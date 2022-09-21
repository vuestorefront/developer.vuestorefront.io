import ejs from 'ejs';
import PDF from 'pdfkit';
import SVGtoPDF from 'svg-to-pdfkit';
import template from '~/server/utils/templates/quizDiploma';
import type { Response, Quiz } from '~/types/api/quiz';

export function getDiplomaSVG(response: Response, quiz: Quiz): string {
  const date = new Date(response.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return ejs.render(template, {
    response,
    quiz,
    date,
  });
}

export function getPdfBufferFromSvg(svg: string): PDFKit.PDFDocument {
  const doc = new PDF({
    layout: 'landscape',
    size: 'A4',
  });

  SVGtoPDF(doc, svg, 0, 0);
  doc.end();

  return doc;
}
