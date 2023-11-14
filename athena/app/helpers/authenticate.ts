import { LocalStorageKeys } from "./local_storage_keys";

export function isWalletConnected(): boolean {
   const address = localStorage.getItem(LocalStorageKeys.USER_ADDRESS);
   if (address == null) {
    return false;
   } 
   return true;
}