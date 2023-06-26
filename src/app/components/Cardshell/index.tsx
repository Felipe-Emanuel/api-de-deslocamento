import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "./CardShell.module.scss";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ReactNode } from "react";
import { CardActionArea } from "@mui/material";

interface CardshellProps {
  onClick?: () => void;
  children: ReactNode;
  header: ReactNode;
  isEddit?: boolean;
  imagePath: string;
}

export function Cardshell({
  imagePath = "",
  children,
  header,
  isEddit = false,
  onClick,
}: CardshellProps) {
  return (
    <Card
      data-testid="card"
      onClick={onClick}
      variant="outlined"
      className={!isEddit ? styles.card : styles.cardEdit}
    >
      {isEddit && <h3>Cliente Atual</h3>}
      <CardActionArea>
        <CardContent>
          <Typography
            className={styles.cardHeader}
            gutterBottom
            component="div"
            variant="overline"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Image
              src={`https://source.unsplash.com/random/400x400/?${imagePath}`}
              height={50}
              width={50}
              alt={`cliente banner`}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
              placeholder="blur"
              className={styles.img}
            />
            {header}
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
