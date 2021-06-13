#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTOC_BIN="./protoc-3.17.3-osx-x86_64/bin/protoc"
PROTO_DIR="./proto/akash/proto"
OUT_DIR="../src/codec/"

mkdir -p "$OUT_DIR"

$PROTOC_BIN \
  --plugin="../node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$PROTO_DIR/akash/audit/v1beta1/audit.proto" \
  "$PROTO_DIR/akash/audit/v1beta1/query.proto" \
  "$PROTO_DIR/akash/base/v1beta1/attribute.proto" \
  "$PROTO_DIR/akash/base/v1beta1/endpoint.proto" \
  "$PROTO_DIR/akash/base/v1beta1/resource.proto" \
  "$PROTO_DIR/akash/base/v1beta1/resourcevalue.proto" \
  "$PROTO_DIR/akash/cert/v1beta1/cert.proto" \
  "$PROTO_DIR/akash/cert/v1beta1/query.proto" \
  "$PROTO_DIR/akash/deployment/v1beta1/deployment.proto" \
  "$PROTO_DIR/akash/deployment/v1beta1/group.proto" \
  "$PROTO_DIR/akash/deployment/v1beta1/params.proto" \
  "$PROTO_DIR/akash/deployment/v1beta1/query.proto" \
  "$PROTO_DIR/akash/escrow/v1beta1/types.proto" \
  "$PROTO_DIR/akash/escrow/v1beta1/query.proto" \
  "$PROTO_DIR/akash/market/v1beta1/bid.proto" \
  "$PROTO_DIR/akash/market/v1beta1/lease.proto" \
  "$PROTO_DIR/akash/market/v1beta1/order.proto" \
  "$PROTO_DIR/akash/market/v1beta1/params.proto" \
  "$PROTO_DIR/akash/market/v1beta1/query.proto" \
  "$PROTO_DIR/akash/market/v1beta1/service.proto" \
  "$PROTO_DIR/akash/provider/v1beta1/provider.proto" \
  "$PROTO_DIR/akash/provider/v1beta1/query.proto"