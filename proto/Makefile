include ../lib/nanopb/extra/nanopb.mk

protofile ?= message.proto
out ?= ../dist/

CFLAGS = -Wall -Werror -g -O0
CFLAGS += "-I$(NANOPB_DIR)"
CSRC  = message.pb.c               # The compiled protocol definition
CSRC += $(NANOPB_DIR)/pb_encode.c  # The nanopb encoder
CSRC += $(NANOPB_DIR)/pb_decode.c  # The nanopb decoder
CSRC += $(NANOPB_DIR)/pb_common.c  # The nanopb common parts

build:
	@echo "Compiling..."
	@mkdir -p $(out)
	$(PROTOC) $(PROTOC_OPTS) ./message.proto --python_out=$(out) --nanopb_out=$(out)
	@echo "Done."

clean:
	@echo "Removing distributions..."
	@rm -rf $(out)
	@echo "Done."