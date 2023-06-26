import Image from "next/image";
import styles from "./CardShell.module.scss";
import { ReactNode } from "react";

interface CardshellProps {
  onClick?: () => void;
  children: ReactNode;
  header: ReactNode;
  isEddit?: boolean;
  preview?: boolean;
  noToutch?: boolean;
  imagePath: string;
}

export function Cardshell({
  imagePath = "",
  children,
  header,
  isEddit = false,
  preview = false,
  noToutch = false,
  onClick,
}: CardshellProps) {
  return (
    <div
      data-testid="card"
      onClick={onClick}
      className={styles.card}
      style={{ pointerEvents: noToutch ? 'none' : 'auto' }}
    >
      {isEddit && <h3>Cliente Atual</h3>}
      {preview && <h3>Pré visualização</h3>}
      <div>
        <div>
          <div
            className={styles.cardHeader}
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
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
