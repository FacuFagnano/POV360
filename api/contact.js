import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      fullName,
      company,
      email,
      address,
      phone,
      area,
      details,
    } = req.body;

    if (!fullName || !email || !details) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "POV360 Website <onboarding@resend.dev>",
      to: ["facundofagnano+testPOV360@gmail.com"],
      replyTo: email,
      subject: `Nueva consulta web - ${fullName}`,
      html: `
        <h2>Nueva solicitud de relevamiento</h2>

        <p><strong>Nombre:</strong> ${fullName}</p>
        <p><strong>Inmobiliaria / Empresa:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "-"}</p>
        <p><strong>Dirección:</strong> ${address || "-"}</p>
        <p><strong>Metros cuadrados:</strong> ${area || "-"}</p>

        <hr />

        <p><strong>Detalle de servicios solicitados:</strong></p>
        <p>${details}</p>
      `,
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(200).json({
      message: "Email sent successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}