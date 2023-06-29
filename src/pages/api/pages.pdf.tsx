import {
  renderToBuffer,
  Page,
  View,
  Text,
  Document,
} from "@react-pdf/renderer";
import { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-dynamic";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const buffer = await renderToBuffer(
    <Document producer="foo" creator="foo" title="Pages">
      <Page size="A4">
        <View>
          <Text>Hello from pages directory</Text>
        </View>
      </Page>
    </Document>
  );

  res
    .status(200)
    .setHeader("Content-Type", "application/pdf")
    .setHeader("Content-Disposition", `attachment; filename="pages.pdf"`);

  res.send(buffer);
}
