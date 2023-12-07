package main

import (
	"ccwc/utils"
	"testing"
)

func Test_wc(t *testing.T) {
	type args struct {
		f string
		c *bool
		w *bool
		l *bool
	}
	tests := []struct {
		name     string
		args     args
		expected string
	}{
		{"Should work when all args are true", args{"test.txt", utils.ToPointer(true), utils.ToPointer(true), utils.ToPointer(true)}, "7142 53033 332143 test.txt"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			expected := tt.expected
			actual := wc(tt.args.f, tt.args.c, tt.args.w, tt.args.l)

			if expected != actual {
				t.Errorf("Expected %s, got %s", expected, actual)
			}
		})
	}
}
