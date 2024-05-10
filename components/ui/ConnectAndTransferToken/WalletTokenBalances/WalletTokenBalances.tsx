"use client";

import { useIsServerSide, useTokenBalance } from "@/hooks";
import { useAccount } from "wagmi";
import { Skeleton } from "../../Skeleton";
import styles from "./WalletTokenBalances.module.scss";
import { tokenBalancesData } from "./data";

export function WalletTokenBalances() {
  const { isServerSide } = useIsServerSide();
  const { balance, isLoading } = useTokenBalance();
  const { isConnected, isConnecting } = useAccount();
  const isFetching = isServerSide || isConnecting || (isConnected && isLoading);

  return (
    <>
      {tokenBalancesData.map(({ key, name, symbol }) => {
        const { formatted = "0.00" } = balance[key] ?? {};

        return (
          <div key={key} className={styles.tokenBalance}>
            <div className={styles.tokenBalanceLeft}>
              <div className={styles.tokenBalanceAvatar}>
                <span className={styles.tokenBalanceAvatarText}>
                  {symbol.charAt(0).toUpperCase()}
                </span>
              </div>

              <div className={styles.tokenBalanceDetail}>
                <p className={styles.tokenBalanceDetailSymbol}>{symbol}</p>
                <p className={styles.tokenBalanceDetailName}>{name}</p>
              </div>
            </div>

            <div className={styles.tokenBalanceRight}>
              <div className={styles.tokenBalanceAmount}>
                {isFetching ? (
                  <Skeleton width={65} height={{ outer: 20, inner: 14 }} />
                ) : (
                  /**
                   * @TODO Get USD value of token from an external API.
                   * (e.g: coinmarketcap.com/api, coingecko.com/en/api)
                   */
                  <span className={styles.tokenBalanceAmountValue}>
                    - - - USD
                  </span>
                )}
                {isFetching ? (
                  <Skeleton width={130} height={14} />
                ) : (
                  <span className={styles.tokenBalanceAmountToken}>
                    {formatted} {symbol}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
