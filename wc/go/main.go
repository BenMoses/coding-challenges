package main

import (
	"bytes"
	"ccwc/utils"
	"flag"
	"fmt"
	"io"
	"io/ioutil"
	"strconv"
)

const (
	NEW_LINE = 10
	SPACE    = 32
)

func wc(f string, c *bool, w *bool, l *bool) string {

	b, err := ioutil.ReadFile(f)
	utils.Check(err)

	reader := bytes.NewReader(b)
	pos := 0

	lines := 0
	words := 0
	characters := 0

	for {
		// Read next character
		if r, _, err := reader.ReadRune(); err != nil {
			if err == io.EOF {
				break
			} else {
				panic(err)
			}
		} else {
			if r == NEW_LINE {
				lines++
			} else if r == SPACE {
				words++
			}

			characters++
			pos++
		}
	}

	output := ""

	// Order of the output is [lines, words, size, name]
	if *l {
		output += strconv.FormatInt(int64(lines), 10) + " "
	}

	if *w {
		output += strconv.FormatInt(int64(words), 10) + " "
	}

	if *c {
		output += strconv.FormatInt(int64(characters), 10) + " "
	}

	output += f

	return output
}

func main() {
	c := flag.Bool("c", false, "The number of bytes in each input file is written to the standard output.  This will cancel out any prior usage of the -m option.")
	w := flag.Bool("w", false, "The number of words in each input file is written to the standard output.")
	l := flag.Bool("l", false, "The number of lines in each input file is written to the standard output.")
	flag.Parse()
	f := flag.Arg(0)

	output := wc(f, c, w, l)
	fmt.Printf(output)

}
