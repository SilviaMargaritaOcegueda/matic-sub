import { BigInt } from "@graphprotocol/graph-ts"
import { Transfer } from "../generated/MaticToken/MaticToken"
import { Transfer as MaticTransfer } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let id = event.transaction.hash
  let transfer = new MaticTransfer(id)
  transfer.from = event.params.from
  transfer.to = event.params.to
  transfer.amount = event.params.value
  transfer.timestamp = event.block.timestamp
  transfer.save()
}