# Include the nanopb provided Makefile rules
include nanopb.mk

out ?= ../dist/

protos: *.proto
	@echo "Compiling..."
	@mkdir -p $(out)
	@$(PROTOC) $(PROTOC_OPTS) --nanopb_out=$(out) --js_out=import_style=commonjs,binary:$(out) *.proto
	@cp ../lib/nanopb-0.4.2/*.c $(out)
	@cp ../lib/nanopb-0.4.2/*.h $(out)
	@sed -i '.bak'  's/<pb.h>/"pb.h"/' $(out)*.pb.h $(out)command.pb.h
	@rm $(out)/*.bak
	@echo "Done."

clean:
	@rm -rf $(out)
	@echo "Removed compiled code."