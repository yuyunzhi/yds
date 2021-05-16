export PATH := $(shell pwd)/node_modules/.bin:$(PATH)
.PHONY: api

build:
	yarn build

# api文件与后端沟通好, 需要添加的是哪个文件
# 以班级考核4为例
services = api/xjy/module/classevaluation/classevaluation.api
# services = classevaluation.api
api:
	# git submodule update --init --recursive
	# chmode 777 /api/script/goctl
	@$(foreach var, $(services), api/script/goctl api ts -dir  $(dir $(subst api/xjy/,./src/api/,$(var))) -api $(var) -webapi api/api )
