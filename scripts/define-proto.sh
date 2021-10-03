#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

# In the proto directory:
# git clone https://github.com/ovrclk/akash.git (checkout version, e.g. git checkout v0.14.0)
# git clone https://github.com/cosmos/cosmos-sdk.git (checkout version, e.g. git checkout v0.44.1)
PROTOC_BIN="./protoc-3.17.3-osx-x86_64/bin/protoc"
AKASH_PROTO_DIR="./proto/akash/proto"
COSMOS_PROTO_DIR="./proto/cosmos-sdk/proto"
THIRD_PARTY_PROTO_DIR="./proto/cosmos-sdk/third_party/proto"
OUT_DIR="../src/codec/"

mkdir -p "$OUT_DIR"

$PROTOC_BIN \
  --plugin="../node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$AKASH_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$AKASH_PROTO_DIR/akash/audit/v1beta1/audit.proto" \
  "$AKASH_PROTO_DIR/akash/audit/v1beta1/query.proto" \
  "$AKASH_PROTO_DIR/akash/base/v1beta1/attribute.proto" \
  "$AKASH_PROTO_DIR/akash/base/v1beta1/endpoint.proto" \
  "$AKASH_PROTO_DIR/akash/base/v1beta1/resource.proto" \
  "$AKASH_PROTO_DIR/akash/base/v1beta1/resourcevalue.proto" \
  "$AKASH_PROTO_DIR/akash/cert/v1beta1/cert.proto" \
  "$AKASH_PROTO_DIR/akash/cert/v1beta1/query.proto" \
  "$AKASH_PROTO_DIR/akash/deployment/v1beta1/deployment.proto" \
  "$AKASH_PROTO_DIR/akash/deployment/v1beta1/group.proto" \
  "$AKASH_PROTO_DIR/akash/deployment/v1beta1/params.proto" \
  "$AKASH_PROTO_DIR/akash/deployment/v1beta1/query.proto" \
  "$AKASH_PROTO_DIR/akash/escrow/v1beta1/types.proto" \
  "$AKASH_PROTO_DIR/akash/escrow/v1beta1/query.proto" \
  "$AKASH_PROTO_DIR/akash/market/v1beta1/bid.proto" \
  "$AKASH_PROTO_DIR/akash/market/v1beta1/lease.proto" \
  "$AKASH_PROTO_DIR/akash/market/v1beta1/order.proto" \
  "$AKASH_PROTO_DIR/akash/market/v1beta1/params.proto" \
  "$AKASH_PROTO_DIR/akash/market/v1beta1/query.proto" \
  "$AKASH_PROTO_DIR/akash/market/v1beta1/service.proto" \
  "$AKASH_PROTO_DIR/akash/provider/v1beta1/provider.proto" \
  "$AKASH_PROTO_DIR/akash/provider/v1beta1/query.proto"

# Remove unnecessary codec files
rm -rf \
  "$OUT_DIR/gogoproto/" \
  "$OUT_DIR/google/"