# Include the nanopb provided Makefile rules
include nanopb.mk

protofile ?= message.proto
out ?= ../dist/

message: message.proto
	@echo "Compiling..."
	@mkdir -p $(out)
	@cp ../lib/nanopb-0.4.2/*.c $(out)
	@cp ../lib/nanopb-0.4.2/*.h $(out)
	@$(PROTOC) $(PROTOC_OPTS) --nanopb_out=$(out) --js_out=import_style=commonjs,binary:$(out) $(protofile)
	@sed -i '.bak'  's/<pb.h>/"pb.h"/' $(out)/message.pb.h
	@rm $(out)/*.bak
	@echo "Done."

clean:
	@rm -rf $(out)
	@echo "Removed compiled code."