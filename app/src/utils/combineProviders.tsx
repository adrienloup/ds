/* eslint-disable  @typescript-eslint/no-explicit-any */
import { ComponentProps, ComponentType, FC } from "react";
import { AuthProvider } from "../contexts/Auth";
import { SettingsProvider } from "../contexts/Settings";
import { FontSizeProvider } from "../contexts/FontSize";
import { AlertProvider } from "../contexts/Alert";
import { TaskProvider } from "../contexts/Task";
import { NotificationsProvider } from "../contexts/Notifications";
import { BannerProvider } from "../contexts/Banner";

type Providers = [ComponentType<any>, ComponentProps<any>?][];

const combineProviders = (providers: Providers): FC =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>
            <>{children}</>
          </Provider>
        </AccumulatedProviders>
      ),
    ({ children }: any) => <>{children}</>
  );

export const AllProviders: any = combineProviders([
  [AuthProvider],
  [SettingsProvider],
  [FontSizeProvider],
  [AlertProvider],
  [TaskProvider],
  [NotificationsProvider],
  [BannerProvider],
]);
