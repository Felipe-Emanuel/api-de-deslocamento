"use client";
import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "./SectionCard.module.scss";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { getData } from "@/src/data/services/client";
import { CardActionArea } from "@mui/material";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { useEffect, useState } from "react";
import { CardType } from "@/src/data/contexts/StateContext";
import { Normalize } from "@/src/functions/Normalize";

interface SectionCardProps {
  title: string;
  isLastObject?: boolean;
}

export function SectionCard({ title, isLastObject }: SectionCardProps) {
  const { formattedDate } = Normalize();
  const { state } = useStateContext();
  const [data, setData] = useState<CardType[]>([]);
  const [idActive, setIdActive] = useState("");

  useEffect(() => {
    const get = async () => {
      const resp = await getData(state);

      setData(resp);
    };

    get();
  }, []);

  const filteredData = isLastObject ? data.slice(0, 3) : data.slice(3);

  if (!data) return null;

  return (
    <>
      <h1>{title}</h1>
      <div className={styles.sectionCard}>
        {filteredData?.map((item, i) => {
          const {
            nome,
            checkList,
            marcaModelo,
            cidade,
            numeroHabilitacao,
            kmInicial,
            placa,
            uf,
            catergoriaHabilitacao,
            motivo,
            kmAtual,
            bairro,
            observacao,
            anoFabricacao,
            fimDeslocamento,
            inicioDeslocamento,
            kmFinal,
            logradouro,
            numero,
            numeroDocumento,
            tipoDocumento,
            vencimentoHabilitacao,
          } = item;
          const formatted = (date: string) => new Date(date);

          return (
            <Card
              key={i}
              sx={{ maxWidth: 345 }}
              className={`${styles.card} ${
                idActive === String(i) ? styles.isActive : styles.desactiveCard
              }`}
              onBlur={() => setIdActive("")}
              onClick={() => setIdActive(String(i))}
            >
              <CardActionArea>
                <Image
                  src={`https://source.unsplash.com/random/250x250/?space`}
                  height={250}
                  width={350}
                  alt={`${state} banner`}
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
                  placeholder="blur"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {nome || marcaModelo || anoFabricacao}
                  </Typography>
                  <Typography variant="overline">
                    {placa ||
                      catergoriaHabilitacao ||
                      numeroDocumento ||
                      tipoDocumento ||
                      formattedDate(formatted(vencimentoHabilitacao))}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cidade || bairro || uf}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {logradouro || numero}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {kmInicial || kmAtual || kmFinal || numeroHabilitacao}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {motivo || observacao || checkList}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formattedDate(formatted(fimDeslocamento)) ||
                      formattedDate(formatted(inicioDeslocamento))}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
}
