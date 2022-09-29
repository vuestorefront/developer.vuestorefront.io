import ejs from 'ejs';
import PDF from 'pdfkit';
import SVGtoPDF from 'svg-to-pdfkit';
import base64Font from '~/server/utils/templates/quizDiplomaFont';
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
    base64Font,
  });
}

export function getPdfBufferFromSvg(svg: string): PDFKit.PDFDocument {
  const buffer = Buffer.from(base64Font, 'base64');

  const doc = new PDF({
    layout: 'landscape',
    size: 'A4',
  });

  doc.registerFont('Red Hat Display', buffer);

  SVGtoPDF(doc, svg, 0, 0);
  doc.end();

  return doc;
}
